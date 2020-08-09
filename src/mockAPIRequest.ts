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

const cartData = [
  {
    username: 'coposaja',
    cart: {
      items: [
        {
          burger: {
            ingredients: 'TSCM',
            price: 4.80,
          },
          quantity: 1,
          itemPrice: 4.80,
        },
        {
          burger: {
            ingredients: 'SCMCM',
            price: 5.70,
          },
          quantity: 2,
          itemPrice: 11.40,
        },
        {
          burger: {
            ingredients: 'CMS',
            price: 4.50,
          },
          quantity: 5,
          itemPrice: 22.50,
        },
      ],
      totalPrice: 38.70,
    },
  },
  {
    username: 'admin',
    cart: {
      items: [
        {
          burger: {
            ingredients: 'CMS',
            price: 4.50,
          },
          quantity: 1,
          itemPrice: 4.50,
        },
      ],
      totalPrice: 4.50,
    },
  },
];

const mockAPIRequest = async (
  route: string,
  param: any,
) => {
  return new Promise((resolve, reject) => setTimeout(() => {
    let retData;
    switch (route) {
      case 'auth':
        retData = authData.find((x) => x.username === param.username && x.password === param.password);
        resolve({
          status: retData ? 200 : 500,
          res: retData,
        });
        break;

      case 'cart':
        let username = param.username ? param.username : 'coposaja';
        retData = cartData.find((x) => x.username === username)?.cart;
        resolve({
          status: retData ? 200 : 500,
          res: retData,
        })
        break;
      default:
        return {};
    }
  }, 2000));
}

export default mockAPIRequest;
