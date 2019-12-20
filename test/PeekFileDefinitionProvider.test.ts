//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert'
import PeekFileDefinitionProvider from '../src/PeekFileDefinitionProvider'

const provider = new PeekFileDefinitionProvider

// Defines a Mocha test suite to group tests of similar kind together
suite("PeekFileDefinitionProvider Tests", () => {

    // Defines a Mocha unit test
    test("getPathBasedFilenames", () => {
        const expectedFilenames = [
            "i/AmALongNameWithPath.vue",
            "i/am/ALongNameWithPath.vue",
            "i/am/a/LongNameWithPath.vue",
            "i/am/a/long/NameWithPath.vue",
            "i/am/a/long/name/WithPath.vue",
            "i/am/a/long/name/with/Path.vue",
        ]
        const possibleFileNames = provider.getPathBasedFilenames('IAmALongNameWithPath', '.vue')

        assert.deepEqual(
            possibleFileNames,
            expectedFilenames
        )
    });
});