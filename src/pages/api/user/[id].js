import ctrlUser from '../../../controllers/ctrlUser';

export default async function handler(req, res) {
  return new Promise((resolve) => {
    switch (req.method) {
      case 'PUT':
        switch (req.query.path) {
          case 'USUARIO_UPDATE':
            return ctrlUser.USUARIO_UPDATE(req, res, resolve);
        }
        break;
      case 'GET':
        switch (req.query.path) {
          case 'USUARIO_GET_XID':
            return ctrlUser.USUARIO_GET_XID(req, res, resolve);
        }
        break;
    }
  });
}
