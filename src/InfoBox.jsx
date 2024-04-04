import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}) {
    let INIT_URL = "https://media.istockphoto.com/id/1501161509/photo/greenish-trees-visible-with-the-grey-clouds-background.jpg?s=1024x1024&w=is&k=20&c=1D6Yj6Ugu5XHq2EVv6lHzCr6lQxMldP3FBSYkejGwn4=";
    let HOT_URL = "https://images.unsplash.com/photo-1678649851081-4c7ce62b6995?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://media.istockphoto.com/id/1457685989/photo/view-of-kufri-in-himachal-pradesh-with-snow-fall.jpg?s=1024x1024&w=is&k=20&c=qFUb-YwqCLCP4L4LmU_fcn-ap6FFaMdbbB0gNSGEdoA=";
    let RAIN_URL = "https://images.unsplash.com/photo-1594157817947-c5e9d41050b9?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 145 }}
                        image={
                            info.humidity > 80
                            ? RAIN_URL
                            : info.temp > 15
                            ? HOT_URL
                            : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{
                            info.humidity > 80
                            ? <ThunderstormIcon/>
                            : info.temp > 15
                            ? <WhatshotIcon/>
                            : <AcUnitIcon/>
                        }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"} >
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}</p>
                            <p>Max Temp = {info.tempMax}</p>
                            <p>The weather can be described as ${info.weather} and feel like = {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
