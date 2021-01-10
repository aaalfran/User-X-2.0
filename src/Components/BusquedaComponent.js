import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
    Container,
    Grid,
    makeStyles
  } from '@material-ui/core';

  import '../css/buscador.css'


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));

function useLoadResource(){

    const classes = useStyles();

    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/api/allproducts")
    .then(response => response.json())
    .then(data => {
        setProductos(data)})
    .catch(error=> console.log( "Hubo un error "+error))
    }, [] )
    return(
<>
        <Container maxWidth="lg">

        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
        >

        <div id="catalogo">
        
            {productos.map(producto => (<>
                <Grid
                    item
                    lg= {3}
                   >
                            <Card className={classes.root}>
                            <CardHeader id="name_product"
            
                    title={producto.nombre}
                    subheader={ "$" + producto.precio}
                />
                <CardMedia
                    className={classes.media}
                    image={producto.imagen}
                    title={producto.nombre}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {producto.descripcion}
                    </Typography>
                </CardContent>

                </Card>
                </Grid>
           </>
       ))}
        </div>
        </Grid>
        </Container>
        </>
    );
}

export default useLoadResource;