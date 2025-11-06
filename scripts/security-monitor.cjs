#!/usr/bin/env node

/**
 * Script de Monitoramento de Segurança
 * Escola Ilda Vieira Vilela - React Website
 * 
 * Executa verificações periódicas de segurança e gera relatórios
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityMonitor {
    constructor() {
        this.reportPath = path.join(__dirname, '../security-reports');
        this.timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        
        // Criar diretório de relatórios se não existir
        if (!fs.existsSync(this.reportPath)) {
            fs.mkdirSync(this.reportPath, { recursive: true });
        }
    }

    /**
     * Executa auditoria de dependências npm
     */
    runNpmAudit() {
        try {
            console.log('🔍 Executando npm audit...');
            const auditResult = execSync('npm audit --json', { 
                encoding: 'utf8',
                cwd: path.join(__dirname, '..')
            });
            
            const audit = JSON.parse(auditResult);
            return {
                vulnerabilities: audit.vulnerabilities || {},
                metadata: audit.metadata || {},
                auditReportVersion: audit.auditReportVersion || 2
            };
        } catch (error) {
            console.warn('⚠️ npm audit encontrou vulnerabilidades');
            try {
                const errorOutput = JSON.parse(error.stdout);
                return {
                    vulnerabilities: errorOutput.vulnerabilities || {},
                    metadata: errorOutput.metadata || {},
                    auditReportVersion: errorOutput.auditReportVersion || 2,
                    hasVulnerabilities: true
                };
            } catch (parseError) {
                return { error: 'Falha ao executar npm audit' };
            }
        }
    }

    /**
     * Verifica atualizações de dependências
     */
    checkOutdatedPackages() {
        try {
            console.log('📦 Verificando pacotes desatualizados...');
            const outdatedResult = execSync('npm outdated --json', { 
                encoding: 'utf8',
                cwd: path.join(__dirname, '..')
            });
            
            return JSON.parse(outdatedResult);
        } catch (error) {
            // npm outdated retorna exit code 1 quando há pacotes desatualizados
            try {
                return JSON.parse(error.stdout) || {};
            } catch (parseError) {
                return {};
            }
        }
    }

    /**
     * Analisa arquivos de configuração de segurança
     */
    analyzeSecurityFiles() {
        const securityFiles = [
            'vite.config.ts',
            'src/utils/securityConfig.ts',
            'index.html'
        ];

        const analysis = {};

        securityFiles.forEach(file => {
            const filePath = path.join(__dirname, '..', file);
            if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath, 'utf8');
                
                analysis[file] = {
                    exists: true,
                    hasCSP: content.includes('Content-Security-Policy'),
                    hasHTTPS: content.includes('https') || content.includes('HTTPS'),
                    hasXSS: content.includes('X-XSS-Protection'),
                    hasNoSniff: content.includes('X-Content-Type-Options'),
                    size: content.length
                };
            } else {
                analysis[file] = { exists: false };
            }
        });

        return analysis;
    }

    /**
     * Calcula score de segurança baseado nos resultados
     */
    calculateSecurityScore(auditData, outdatedData, securityFiles) {
        let score = 10.0;
        let issues = [];

        // Penalizar por vulnerabilidades
        if (auditData.hasVulnerabilities && auditData.metadata) {
            const vulnCount = auditData.metadata.vulnerabilities || 0;
            const severityPenalty = {
                critical: 2.0,
                high: 1.5,
                moderate: 1.0,
                low: 0.5
            };

            Object.entries(auditData.metadata.vulnerabilities || {}).forEach(([severity, count]) => {
                const penalty = (severityPenalty[severity] || 0.5) * count;
                score -= penalty;
                issues.push(`${count} vulnerabilidades ${severity}`);
            });
        }

        // Penalizar por pacotes desatualizados críticos
        const criticalPackages = ['react', 'vite', '@types/react'];
        const outdatedCritical = Object.keys(outdatedData).filter(pkg => 
            criticalPackages.includes(pkg)
        );
        
        if (outdatedCritical.length > 0) {
            score -= outdatedCritical.length * 0.3;
            issues.push(`${outdatedCritical.length} pacotes críticos desatualizados`);
        }

        // Bonificar por configurações de segurança
        const securityFeatures = [
            'hasCSP', 'hasHTTPS', 'hasXSS', 'hasNoSniff'
        ];

        let securityFeaturesCount = 0;
        Object.values(securityFiles).forEach(file => {
            if (file.exists) {
                securityFeatures.forEach(feature => {
                    if (file[feature]) securityFeaturesCount++;
                });
            }
        });

        score += (securityFeaturesCount / (securityFeatures.length * Object.keys(securityFiles).length)) * 2.0;

        return {
            score: Math.max(0, Math.min(10, score)).toFixed(1),
            issues,
            securityFeaturesActive: securityFeaturesCount
        };
    }

    /**
     * Gera relatório de segurança completo
     */
    generateReport() {
        console.log('🛡️ Iniciando monitoramento de segurança...\n');

        const auditData = this.runNpmAudit();
        const outdatedData = this.checkOutdatedPackages();
        const securityFiles = this.analyzeSecurityFiles();

        const securityScore = this.calculateSecurityScore(auditData, outdatedData, securityFiles);

        const report = {
            timestamp: new Date().toISOString(),
            website: 'Escola Ilda Vieira Vilela',
            securityScore: securityScore,
            audit: auditData,
            outdatedPackages: outdatedData,
            securityConfiguration: securityFiles,
            recommendations: this.generateRecommendations(auditData, outdatedData, securityScore)
        };

        // Salvar relatório
        const reportFile = path.join(this.reportPath, `security-report-${this.timestamp}.json`);
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

        // Gerar resumo no console
        this.printSummary(report);

        return report;
    }

    /**
     * Gerar recomendações baseadas nos resultados
     */
    generateRecommendations(auditData, outdatedData, securityScore) {
        const recommendations = [];

        // Recomendações para vulnerabilidades
        if (auditData.hasVulnerabilities) {
            recommendations.push({
                priority: 'ALTA',
                category: 'Vulnerabilidades',
                action: 'Executar "npm audit fix --force" para corrigir vulnerabilidades',
                risk: 'Exposição a ataques de segurança'
            });
        }

        // Recomendações para pacotes desatualizados
        const criticalOutdated = Object.keys(outdatedData).filter(pkg => 
            ['react', 'vite', '@types/react'].includes(pkg)
        );

        if (criticalOutdated.length > 0) {
            recommendations.push({
                priority: 'MÉDIA',
                category: 'Atualizações',
                action: `Atualizar pacotes críticos: ${criticalOutdated.join(', ')}`,
                risk: 'Perda de patches de segurança'
            });
        }

        // Recomendações baseadas no score
        if (parseFloat(securityScore.score) < 7.0) {
            recommendations.push({
                priority: 'ALTA',
                category: 'Configuração',
                action: 'Implementar headers de segurança adicionais (HSTS, CSP)',
                risk: 'Website vulnerável a ataques XSS e MITM'
            });
        }

        return recommendations;
    }

    /**
     * Imprimir resumo no console
     */
    printSummary(report) {
        console.log('\n' + '='.repeat(60));
        console.log('📊 RELATÓRIO DE SEGURANÇA');
        console.log('='.repeat(60));
        
        console.log(`🎯 Score de Segurança: ${report.securityScore.score}/10.0`);
        
        if (report.securityScore.issues.length > 0) {
            console.log('\n⚠️ Problemas Identificados:');
            report.securityScore.issues.forEach(issue => {
                console.log(`   • ${issue}`);
            });
        }

        if (report.recommendations.length > 0) {
            console.log('\n💡 Recomendações:');
            report.recommendations.forEach(rec => {
                console.log(`   ${rec.priority === 'ALTA' ? '🔴' : '🟡'} [${rec.priority}] ${rec.action}`);
            });
        }

        console.log(`\n📄 Relatório completo salvo em: security-reports/security-report-${this.timestamp}.json`);
        console.log('='.repeat(60) + '\n');
    }
}

// Executar se chamado diretamente
if (require.main === module) {
    const monitor = new SecurityMonitor();
    monitor.generateReport();
}

module.exports = SecurityMonitor;