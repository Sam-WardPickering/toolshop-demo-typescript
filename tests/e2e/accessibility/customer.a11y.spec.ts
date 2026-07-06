import { test , expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { getSeriousViolations, logNonBlockingViolations } from '../helpers/accessibility';
import { LoginPage } from '../pages';
import { users } from '../../test-data/users';

const customer = users.customer1;