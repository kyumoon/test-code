    

describe('isChanged() 함수', function() {
    
    var before,
        after,
        keys;
    
    beforeEach(function() {
        before = {
             val1 : 1234
            ,val2 : 2345
            ,val3 : 3333
        }

        after = {
             val1 : 1234
            ,val2 : 2345
            ,val3:  4444
        }

        keys = ['val1','val2'];
    });
    
    
    it('비교대상, 비교값, 키배열이 올바르게 전달되지 않은경우', function() {
        expect(() => {isChanged(null,after,keys)}).toThrow();
        expect(() => {isChanged(before,null,keys)}).toThrow();
        expect(() => {isChanged(before,after,null)}).toThrow();
        expect(() => {isChanged(before,after,after)}).toThrow();
    });
    
    
    describe('지정한 키값만 비교한다.', function() {
        it('지정한값이 변경되지 않은 경우', function() {
            expect(isChanged(before,after,keys)).toBe(false);
            
        });
        
        
        it('지정한값이 변경된 경우', function() {
            after.val2 = 3333;
            expect(isChanged(before,after,keys)).toBe(false);
        })
    });
        
        
});
    