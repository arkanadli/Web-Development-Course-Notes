const bcrypt = require('bcrypt');


const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12)
    console.log(hash);
}

const login = async (pw) => {
    const result = await bcrypt.compare(pw, '$2b$12$peUXjB2L0Mf/FYY.Z.wha.bMf8OBPJs0Oaqb2FsGwEdYR1EbvS8xK')
    if (result) {
        console.log("Succefully Login");
    } else console.log('FAILED LOGIN');
}

hashPassword('monkey')
login('monkey')