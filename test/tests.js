test("Sample test", function () {

    $('#qunit-fixture').append('<div id="target"></div>');
    $('#target').scheduler();

    equal("test value", "expected value", "Expect the result to be...");
});