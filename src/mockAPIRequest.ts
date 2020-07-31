const authData = [
  {
    username: 'coposaja',
    password: 'passwordd',
    fullname: 'coposaja fullname enough'
  },
  {
    username: 'admin',
    password: 'admin',
    fullname: 'Admin'
  },
  {
    username: 'test',
    password: 'testt',
    fullname: 'Testing'
  },
];

const mockAPIRequest = async (
  route: string,
  param: any,
) => {
  return new Promise((resolve, reject) => setTimeout(() => {
    switch (route) {
      case 'auth':
        const retData = authData.find((x) => x.username === param.username && x.password === param.password);
        resolve({
          status: retData ? 200 : 500,
          res: retData,
        });
        break;

      default:
        return {};
    }
  }, 2000));
}

export default mockAPIRequest;
