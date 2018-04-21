describe('JS-utilities', function() {

    describe('maxOfThree()', function() {
        it('returns x if all three are equal', function() {
            var x = 1;
            var y = 1;
            var z = 1;

            expect(maxOfThree(x, y, z)).toBe(1);
        });

        describe('return x or z', function() {
            it('returns x if x > z', function() {
                var x = 4;
                var y = 2
                var z = 3;

                expect(maxOfThree(4, 2, 3)).toBe(4);
            });

            it('returns z if z > x', function() {
                var x = 4;
                var y = 2;
                var z = 6;

                expect(maxOfThree(4, 2, 6)).toBe(6);
            });

            it('returns y if y > z', function() {
                var x = 4;
                var y = 6;
                var z = 3;

                expect(maxOfThree(4, 6, 3)).toBe(6);
            });

            it('returns z if z > y', function() {
                var x = 4;
                var y = 2;
                var z = 6;

                expect(maxOfThree(4, 2, 6)).toBe(6);
            });
        });


    });

})

