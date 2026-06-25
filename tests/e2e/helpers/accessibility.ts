import { AxeResults } from 'axe-core';

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