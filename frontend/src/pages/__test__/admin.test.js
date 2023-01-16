
const testadmmin =require('../Admin/GetClinet.js')

test('testadmin', () => {
    expect(testadmmin).toBe('test')
    }
)

// Path: frontend\src\pages\Admin\GetClinet.js

export default function GetClinet() {
    return 'test'
}


