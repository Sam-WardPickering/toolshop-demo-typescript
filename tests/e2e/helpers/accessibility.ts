import { AxeResults } from 'axe-core';

export function getSeriousViolations(results: AxeResults) {
    return results.violations.filter(
        (violation) => violation.impact === 'critical' || violation.impact === 'serious'
    );
};