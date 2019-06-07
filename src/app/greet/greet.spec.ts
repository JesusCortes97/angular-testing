import {greet} from './greet';
describe ('greet', () => { // greet suit
    it ('Should We Works?', () =>{
        expect(greet('JCX')).toContain('JCX');
    })
})