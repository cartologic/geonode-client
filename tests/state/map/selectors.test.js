import {isSaving, success, error, errorMessage} from '../../../src/state/map/selectors';

describe('mapSelectors', () => {
  describe('#isSaving', () => {
    it('returns true if it was successfull', () => {
      assert.equal(isSaving({map: { save: { success: true}}}), true);
    });
    it('returns undefined if it was not successfull', () => {
      assert.equal(isSaving({ map: {save: {}}}), undefined);
    });
  });
  describe('#success', () => {
    it('returns true if it was successfull', () => {
      assert.equal(success({map: {save: { success: true}}}), true);
    });
  });
  describe('#error', () => {
    let state;
    beforeEach(() => {
      state = {map: {save: { success: undefined, error: undefined}}};
    });
    describe('success is false', () => {
      beforeEach(() => {
        state.map.save.success = false;
      });
      it('returns false', () => {
        assert.equal(error(state), false);
      });
      describe('error is set', () => {
        beforeEach(() => {
          state.map.save.error = {};
        });
        it('returns true', () => {
          assert.equal(error(state), true);
        });
      });
    });
    describe('success is true', () => {
      beforeEach(() => {
        state.map.save.success = true;
      });
      it('returns false', () => {
        assert.equal(error(state), false);
      });
    });
  });
  describe('#errorMessage', () => {
    let state;
    beforeEach(() => {
      state = {map: {save: { success: undefined, error: undefined}}};
    });
    describe('success is false', () => {
      beforeEach(() => {
        state.map.save.success = false;
      });
      it('returns false', () => {
        assert.equal(errorMessage(state), undefined);
      });
      describe('error is set', () => {
        beforeEach(() => {
          state.map.save = { error: true, errorMessage: 'Test'};
        });
        it('returns error message', () => {
          assert.equal(errorMessage(state), 'Test');
        });
      });
    });
    describe('success is true', () => {
      beforeEach(() => {
        state.map.save.success = true;
      });
      it('returns false', () => {
        assert.equal(errorMessage(state), undefined);
      });
    });
  });
});
