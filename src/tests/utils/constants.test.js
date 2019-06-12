import _ from 'lodash';
import { ENDPOINT_TYPE, MONTH_MAP, SORT_ORDER, INITIAL_STATE, CATEGORY_TYPE } from '../../utils/constants';

describe('ENDPOINT_TYPE constant', () => {
    it('should have 2 keys', () => {
        expect(_.keys(ENDPOINT_TYPE).length).toBe(2);
    });
    it('should contain sports string', () => {
        expect(_.chain(ENDPOINT_TYPE).values().includes('sports').value()).toBe(true);
    });
    it('should contain fashion string', () => {
        expect(_.chain(ENDPOINT_TYPE).values().includes('fashion').value()).toBe(true);
    });
    it('should contain SPORTS key', () => {
        expect(_.chain(ENDPOINT_TYPE).keys().includes('SPORTS').value()).toBe(true);
    });
    it('should contain FASHION key', () => {
        expect(_.chain(ENDPOINT_TYPE).keys().includes('FASHION').value()).toBe(true);
    });
});

describe('MONTH_MAP constant', () => {
    const months = 12;
    it(`should have ${months} keys`, () => {
        expect(_.keys(MONTH_MAP).length).toBe(months);
    });
    it(`should have ${months} values`, () => {
        expect(_.values(MONTH_MAP).length).toBe(months);
    });
});