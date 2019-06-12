import { resolveErrorCategory } from '../../utils/errors';

const mockInput = {
    response: {
        config: {
            url: 'test/category',
        }
    }
};
const mockOutput = 'category';

describe('resolveErrorCategory function', () => {
    it('should return a string', () => {
        const getCategory = jest.fn(resolveErrorCategory);

        getCategory(mockInput);

        expect(getCategory).toHaveReturnedWith(mockOutput);
    });
});