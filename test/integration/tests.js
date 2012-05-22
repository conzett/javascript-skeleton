module("foo", {
    setup: function() {
    	// add dummy element to fixture
    	$('#qunit-fixture').append('<div id="target"></div>');
    },
    tearDown: function() {

    });

	test("Sample test", function () {
    	equal("test value", "expected value", "Expect the result to be...");
	});
}