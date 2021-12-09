// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');

// CRUD REPORTE BODEGA


//TOTAL SEGUROS
router.get('/totalSeguros', async (req, res) => {
  try {
  
    binds = {};
    sql = "select count(id_seguro) from seguro";
    result = await settings.OpenConnection(sql, binds, true);

    TotalSeguros = [];

    result.rows.map(seguro => {
        let seguroSchema = {
            "totalSeguros": seguro[0],
        }

        TotalSeguros.push(seguroSchema);
    })
    res.json({title: 'TotalSeguros', 'mydata': TotalSeguros});

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});

//TOTAL FRUTAS
router.get('/totalFrutas', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(id_fruta) from fruta";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalFrutas = [];
  
      result.rows.map(fruta => {
          let frutaSchema = {
              "totalFrutas": fruta[0],
          }
  
          TotalFrutas.push(frutaSchema);
      })
      res.json({title: 'TotalFrutas', 'mydata': TotalFrutas});
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//TOTAL USUARIOS
router.get('/totalUsuarios', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(id_usuario) as totalUsuario from usuario";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalUsuario = [];
  
      result.rows.map(usuario => {
          let usuarioSchema = {
              "totalUsuario": usuario[0],
          }
  
          TotalUsuario.push(usuarioSchema);
      })
      res.json({title: 'TotalUsuario', 'mydata': TotalUsuario});
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//TOTAL SUBASTAS
router.get('/totalSubastas', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(f.id_subastaf)as totalFruta ,count(t.id_subastat) as totalTransporte from subasta_fruta f,subasta_transporte t ";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalSubastas = [];
  
      result.rows.map(subasta => {
          let subastaSchema = {
              "totalFruta":subasta[0],
              "totalTransporte":subasta[1]
          }
  
          TotalSubastas.push(subastaSchema);
      })
      res.json({title: 'TotalSubastas', 'mydata': TotalSubastas});
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//TOTAL VENTAS
router.get('/totalVentas', async (req, res) => {
    try {
    
      binds = {};
      sql = "select to_char(sum(precio_final),'$999,999') as precioTotal from venta_detalle";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalVentas = [];
  
      result.rows.map(ventas => {
          let ventasSchema = {
              "precioTotal":ventas[0]
          }
  
          TotalVentas.push(ventasSchema);
      })
      res.json({title: 'TotalVentas', 'mydata': TotalVentas});
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//muestra de las sumas de todas las ventas
router.get('/ventasTotal', async (req, res) => {
    try {
    
      binds = {};
      //sql = "select count(id_ventaD) as totalDeVentas, to_char(sum(costo_fruta),'$999,999') as totalFruta, to_char(sum(costo_transporte),'$999,999') as totalTransporte, to_char(sum(costo_impuestos),'$999,999') as totalImpuestos, to_char(sum(comision_servicio),'$999,999') as totalComisionS, to_char(sum(comision_empresa),'$999,999') as totalComisionE, to_char(sum(precio_final),'$999,999') as totalPrecio from venta_detalle";
      sql = "select count(id_ventaD) as totalDeVentas, sum(costo_fruta) as totalFruta, sum(costo_transporte) as totalTransporte, sum(costo_impuestos) as totalImpuestos, sum(comision_servicio) as totalComisionS, sum(comision_empresa) as totalComisionE, to_char(sum(precio_final),'$9,999,999') as totalPrecio from venta_detalle";
      result = await settings.OpenConnection(sql, binds, true);
  
      VentasTotal = [];
  
      result.rows.map(ventas => {
          let ventasSchema = {
              "totalDeVentas":ventas[0],
              "totalFruta":ventas[1],
              "totalTransporte":ventas[2],
              "totalImpuestos":ventas[3],
              "totalComisionS":ventas[4],
              "totalComisionE":ventas[5],
              "totalPrecio":ventas[6]              
          }
  
          VentasTotal.push(ventasSchema);
      })
      res.json({title: 'VentasTotal', 'mydata': VentasTotal});
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//SUBASTAS FRUTAS
//total subastas frutas
router.get('/repSubastaF', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(id_subastaf) as total from subasta_fruta";
      result = await settings.OpenConnection(sql, binds, true);
  
      RepSubastaF = [];
  
      result.rows.map(subasta => {
          let subastaSchema = {
              "total":subasta[0],
          }
  
          RepSubastaF.push(subastaSchema);
      })

      res.json({title: 'RepSubastaF', 'mydata': RepSubastaF});
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//subastas total activos
router.get('/subastaFTotalActivos', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(id_subastaf)as totalActivos from subasta_fruta where fk_id_estado=1";
      result = await settings.OpenConnection(sql, binds, true);
  
      SubastaFTotalActivos = [];
  
      result.rows.map(subasta => {
          let subastaSchema = {
              "totalActivos":subasta[0],  
          }
  
          SubastaFTotalActivos.push(subastaSchema);
      })

      res.json({title: 'SubastaFTotalActivos', 'mydata': SubastaFTotalActivos});
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//subastas total inactivos
router.get('/subastaFTotalInactivos', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(id_subastaf)as totalInactivos from subasta_fruta where fk_id_estado=2";
      result = await settings.OpenConnection(sql, binds, true);
  
      SubastaFTotalInactivos = [];
  
      result.rows.map(subasta => {
          let subastaSchema = {
              "totalInactivos":subasta[0],
          }
  
          SubastaFTotalInactivos.push(subastaSchema);
      })

      res.json({title: 'SubastaFTotalInactivos', 'mydata': SubastaFTotalInactivos});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//subastas frutas total dia
router.get('/totalSubastasFPD', async (req, res) => {
    try {
    
      binds = {};
      sql = "SELECT COUNT(to_char(sysdate,'yyyy-mm-dd')) AS totalSubastaDia FROM DUAL,subasta_fruta WHERE fecha_creacion =sysdate";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalSubastasFPD = [];
  
      result.rows.map(subasta => {
          let subastaSchema = {
              "totalSubastaDia":subasta[0]     
          }
  
          TotalSubastasFPD.push(subastaSchema);
      })

      res.json({title: 'TotalSubastasFPD', 'mydata': TotalSubastasFPD});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//subastas frutas total mes
router.get('/totalSubastasFPM', async (req, res) => {
    try {
    
      binds = {};
      sql = "SELECT COUNT(fecha_creacion) AS totalSubastasMensuales FROM subasta_fruta,DUAL WHERE fecha_creacion BETWEEN TRUNC(SYSDATE,'MM') AND LAST_DAY(TRUNC(SYSDATE,'MM'))";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalSubastasFPM = [];
  
      result.rows.map(subasta => {
          let subastaSchema = {
              "totalSubastasMensuales":subasta[0]
                          
          }
  
          TotalSubastasFPM.push(subastaSchema);
      })

      res.json({title: 'TotalSubastasFPM', 'mydata': TotalSubastasFPM});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//subastas frutas total año 2021
router.get('/totalSubastasFPA', async (req, res) => {
    try {
    
      binds = {};
      sql = "SELECT COUNT(fecha_creacion) AS totalSubastaAño FROM subasta_fruta WHERE fecha_creacion BETWEEN TO_DATE('2021-01-01','YYYY-MM-DD') AND TO_DATE('2021-12-31','YYYY-MM-DD')";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalSubastasFPA = [];
  
      result.rows.map(subasta => {
          let subastaSchema = {
              "totalSubastaAño":subasta[0]
                          
          }
  
          TotalSubastasFPA.push(subastaSchema);
      })

      res.json({title: 'TotalSubastasFPA', 'mydata': TotalSubastasFPA});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});

//SUBASTAS TRANSPORTE
//subastas tranportes total
router.get('/subastaTTotal', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(id_subastat)as total from subasta_transporte";
      result = await settings.OpenConnection(sql, binds, true);
  
      SubastaTTotal = [];
  
      result.rows.map(subasta => {
          let subastaSchema = {
              "total":subasta[0]
                          
          }
  
          SubastaTTotal.push(subastaSchema);
      })

      res.json({title: 'SubastaTTotal', 'mydata': SubastaTTotal});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//subastas tranportes activos
router.get('/subastaTActivo', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(id_subastat)as totalActivos from subasta_transporte where fk_id_estado=1";
      result = await settings.OpenConnection(sql, binds, true);
  
      SubastaTActivo = [];
  
      result.rows.map(subasta => {
          let subastaSchema = {
              "totalActivos":subasta[0]
                          
          }
  
          SubastaTActivo.push(subastaSchema);
      })

      res.json({title: 'SubastaTActivo', 'mydata': SubastaTActivo});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//subasta tranporte inactivo
router.get('/subastaTInactivo', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(id_subastat)as totalInactivos from subasta_transporte where fk_id_estado=2";
      result = await settings.OpenConnection(sql, binds, true);
  
      SubastaTInactivo = [];
  
      result.rows.map(subasta => {
          let subastaSchema = {
              "totalInactivos":subasta[0]
                          
          }
  
          SubastaTInactivo.push(subastaSchema);
      })

      res.json({title: 'SubastaTInactivo', 'mydata': SubastaTInactivo});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//subastas transportes total dia
router.get('/totalSubastasTPD', async (req, res) => {
    try {
    
      binds = {};
      sql = "SELECT COUNT(to_char(sysdate,'yyyy-mm-dd')) AS totalSubastaDia FROM DUAL,subasta_transporte WHERE fecha_creacion =sysdate";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalSubastasTPD = [];
  
      result.rows.map(subasta => {
          let subastaSchema = {
              "totalSubastaDia":subasta[0]
                          
          }
  
          TotalSubastasTPD.push(subastaSchema);
      })

      res.json({title: 'TotalSubastasTPD', 'mydata': TotalSubastasTPD});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//subastas transportes total mes
router.get('/totalSubastasTPM', async (req, res) => {
    try {
    
      binds = {};
      sql = "SELECT COUNT(fecha_creacion) AS totalSubastasMensuales FROM subasta_transporte,DUAL WHERE fecha_creacion BETWEEN TRUNC(SYSDATE,'MM') AND LAST_DAY(TRUNC(SYSDATE,'MM'))";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalSubastasTPM = [];
  
      result.rows.map(subasta => {
          let subastaSchema = {
              "totalSubastasMensuales":subasta[0]
                          
          }
  
          TotalSubastasTPM.push(subastaSchema);
      })

      res.json({title: 'TotalSubastasTPM', 'mydata': TotalSubastasTPM});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//subastas transportes total año 2021
router.get('/totalSubastasTPA', async (req, res) => {
    try {
    
      binds = {};
      sql = "SELECT COUNT(fecha_creacion) AS totalSubastaAño FROM subasta_transporte WHERE fecha_creacion BETWEEN TO_DATE('2021-01-01','YYYY-MM-DD') AND TO_DATE('2021-12-31','YYYY-MM-DD')";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalSubastasTPA = [];
  
      result.rows.map(subasta => {
          let subastaSchema = {
              "totalSubastaAño":subasta[0]
                          
          }
  
          TotalSubastasTPA.push(subastaSchema);
      })

      res.json({title: 'TotalSubastasTPA', 'mydata': TotalSubastasTPA});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//PRODUCTOS
//total productos
router.get('/totalProductos', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(id_producto) as totalProducto from producto";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalProductos = [];
  
      result.rows.map(producto => {
          let productosSchema = {
              "totalProducto":producto[0]
                          
          }
  
          TotalProductos.push(productosSchema);
      })

      res.json({title: 'TotalProductos', 'mydata': TotalProductos});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//total productos activos
router.get('/totalProductosA', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(fk_id_estado) as activos from producto where fk_id_estado=1";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalProductosA = [];
  
      result.rows.map(producto => {
          let productosSchema = {
              "activos":producto[0]
                          
          }
  
          TotalProductosA.push(productosSchema);
      })

      res.json({title: 'TotalProductosA', 'mydata': TotalProductosA});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//total productos Inactivos
router.get('/totalProductosI', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(fk_id_estado) as Inactivos from producto where fk_id_estado=2";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalProductosI = [];
  
      result.rows.map(producto => {
          let productosSchema = {
              "Inactivos":producto[0]
                          
          }
  
          TotalProductosI.push(productosSchema);
      })

      res.json({title: 'TotalProductosI', 'mydata': TotalProductosI});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//productos calidad primera calidad
router.get('/totalProductosPC', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(id_producto) as primeraCalidad from producto where fk_id_calidad=1";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalProductosPC = [];
  
      result.rows.map(producto => {
          let productosSchema = {
              "primeraCalidad":producto[0]
                          
          }
  
          TotalProductosPC.push(productosSchema);
      })

      res.json({title: 'TotalProductosPC', 'mydata': TotalProductosPC});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});

//productos calidad segunda calidad
router.get('/totalProductosSC', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(id_producto) as segundaCalidad from producto where fk_id_calidad=2";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalProductosSC = [];
  
      result.rows.map(producto => {
          let productosSchema = {
              "segundaCalidad":producto[0]
                          
          }
  
          TotalProductosSC.push(productosSchema);
      })

      res.json({title: 'TotalProductosSC', 'mydata': TotalProductosSC});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});

//productos calidad tercera calidad
router.get('/totalProductosTC', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(id_producto) as terceraCalidad from producto where fk_id_calidad=3";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalProductosTC = [];
  
      result.rows.map(producto => {
          let productosSchema = {
              "terceraCalidad":producto[0]
                          
          }
  
          TotalProductosTC.push(productosSchema);
      })

      res.json({title: 'TotalProductosTC', 'mydata': TotalProductosTC});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//productos calidad cuarta calidad
router.get('/totalProductosCC', async (req, res) => {
    try {
    
      binds = {};
      sql = "select count(id_producto) as cuartaCalidad from producto where fk_id_calidad=4";
      result = await settings.OpenConnection(sql, binds, true);
  
      TotalProductosCC = [];
  
      result.rows.map(producto => {
          let productosSchema = {
              "cuartaCalidad":producto[0]
                          
          }
  
          TotalProductosCC.push(productosSchema);
      })

      res.json({title: 'TotalProductosCC', 'mydata': TotalProductosCC});
      
  
    } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
    }
  
});


//productos calidad quinta calidad
router.get('/totalProductosQC', async (req, res) => {
  try {
  
    binds = {};
    sql = "select count(id_producto) as quintaCalidad from producto where fk_id_calidad=5";
    result = await settings.OpenConnection(sql, binds, true);

    TotalProductosQC = [];

    result.rows.map(producto => {
        let productosSchema = {
            "quintaCalidad":producto[0]
                        
        }

        TotalProductosQC.push(productosSchema);
    })

    res.json({title: 'TotalProductosQC', 'mydata': TotalProductosQC});
    

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});


//Productos totales por dia
router.get('/totalProductosPD', async (req, res) => {
  try {
  
    binds = {};
    sql = "SELECT COUNT(to_char(sysdate,'yyyy-mm-dd')) AS totalProductoDia FROM DUAL,producto WHERE fecha_creacion =sysdate";
    result = await settings.OpenConnection(sql, binds, true);

    TotalProductosPD = [];

    result.rows.map(producto => {
        let productosSchema = {
            "totalProductoDia":producto[0]
                        
        }

        TotalProductosPD.push(productosSchema);
    })

    res.json({title: 'TotalProductosPD', 'mydata': TotalProductosPD});
    

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});


//Productos totales por MES
router.get('/totalProductosPM', async (req, res) => {
  try {
  
    binds = {};
    sql = "SELECT COUNT(fecha_creacion) AS totalProductoMensuales FROM producto,DUAL WHERE fecha_creacion BETWEEN TRUNC(SYSDATE,'MM') AND LAST_DAY(TRUNC(SYSDATE,'MM'))";
    result = await settings.OpenConnection(sql, binds, true);

    TotalProductosPM = [];

    result.rows.map(producto => {
        let productosSchema = {
            "totalProductoMensuales":producto[0]
                        
        }

        TotalProductosPM.push(productosSchema);
    })

    res.json({title: 'TotalProductosPM', 'mydata': TotalProductosPM});
    

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});


//Productos totales por AÑO 2021
router.get('/totalProductosPA', async (req, res) => {
  try {
  
    binds = {};
    sql = "SELECT COUNT(fecha_creacion) AS totalProductoAño FROM producto WHERE fecha_creacion BETWEEN TO_DATE('2021-01-01','YYYY-MM-DD') AND TO_DATE('2021-12-31','YYYY-MM-DD')";
    result = await settings.OpenConnection(sql, binds, true);

    TotalProductosPA = [];

    result.rows.map(producto => {
        let productosSchema = {
            "totalProductoAño":producto[0]
                        
        }

        TotalProductosPA.push(productosSchema);
    })

    res.json({title: 'TotalProductosPA', 'mydata': TotalProductosPA});
    

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});


module.exports = router;