import { Page } from '@playwright/test';
import { AxeResults } from 'axe-core';
import AxeBuilder from '@axe-core/playwright';


export async function runAxeScan(page: Page, disableRules: string[] = []): Promise<AxeResults> {
    let builder = new AxeBuilder({ page });
    if (disableRules.length > 0) {
        builder = builder.disableRules(disableRules);
    }
    return builder.analyze();
}

export function getSeriousViolations(results: AxeResults) {
    return results.violations.filter(
        (violation) => violation.impact === 'critical' || violation.impact === 'serious'
    );
};


export function logNonBlockingViolations(results: AxeResults) {
    const otherViolations = results.violations.filter(
        (violation) => violation.impact !== 'critical' && violation.impact !== 'serious'
    );

    if (otherViolations.length > 0) {
        console.log(`${otherViolations.length} non-blocking accessibility violation(s) found:`);

        otherViolations.forEach((violation) => {
            console.log(`- [${violation.impact}] ${violation.id}: ${violation.help}`);
        });
    }
};