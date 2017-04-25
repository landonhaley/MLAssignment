import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from './Footer'

fetch('http://demo7475333.mockable.io/spaceships').then(function(response) { 
	// Convert to JSON
	return response.json();
}).then(function(j) {
	
}); 

class Home extends Component {
  render() {
	
    return (
      <div className="full-height">
        <Carousel />
        <MainSection products={PRODUCTS}/>
		<Footer />
      </div>
    );
  }
}

class Carousel extends Component {
  render() {
    return (
      <div id="main-carousel" className="carousel slide carousel-fade white-text" data-ride="carousel" data-interval="false" data-interval="5000">
		<ol className="carousel-indicators">
			<li data-target="#main-carousel" data-slide-to="0" className="active"></li>
			<li data-target="#main-carousel" data-slide-to="1"></li>
			<li data-target="#main-carousel" data-slide-to="2"></li>
		</ol> 
		<div className="carousel-inner" role="listbox">
			<div id="first-slide" className="carousel-item active view hm-black-light">
				<div className="full-bg-img flex-center white-text">
					<ul className="animated fadeIn col-md-12">
						<li>
							<h1 className="h1-responsive">Lease a 2016 Falcon for just 3,749 credits/mo!</h1></li>
						<li>
							<p>with SFS S-c3.8 multi-range TAG, Titanium alloy hull, and 100 MGLT</p>
						</li>
						<li>
							<a target="_blank" href="#" className="btn btn-info btn-lg waves-effect waves-light" rel="nofollow">See more!</a>
						</li>
					</ul>
				</div>			
			</div>
			<div id="second-slide" className="carousel-item view hm-black-light">
				<div className="full-bg-img flex-center white-text">
					<ul className="animated fadeIn col-md-12">
						<li>
							<h1 className="h1-responsive">Most trusted used spaceship dealership in Mos Espa </h1>
						</li>
						<li>
							<p>See why we put honesty before sales </p>
						</li>
						<li>
							<a target="_blank" href="#" className="btn btn-info btn-lg waves-effect waves-light" rel="nofollow">Read more</a>
						</li>
					</ul>
				</div>
			</div>
			<div id="third-slide" className="carousel-item view hm-black-light">
				<div className="full-bg-img flex-center white-text">
					<ul className="animated fadeIn col-md-12">
						<li>
							<h1 className="h1-responsive">Come see what we have in stock!</h1></li>
						<li>
							<p>Stop by any of our 3 locations in the Mos Espa area</p>
						</li>
						<li>
							<a target="_blank" href="#" className="btn btn-primary btn-lg waves-effect waves-light" rel="nofollow">Read more</a>
						</li>
					</ul>
				</div>
			</div>
		</div> 
		<a className="carousel-control-prev" href="#main-carousel" role="button" data-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			<span className="sr-only">Previous</span>
		</a>
		<a className="carousel-control-next" href="#main-carousel" role="button" data-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
			<span className="sr-only">Next</span>
		</a>
	</div>
    );
  }
}

class MainSection extends Component {
  render() {
	var ships = [];
	this.props.products.forEach(function(product) {
		ships.push(<Link to={{ pathname: '/Details', query: { item: product.name } }}>{product.name}</Link>);
	});
	return (
		<div className="container">
			<div className="divider-new">
				<h2 className="h2-responsive wow fadeIn">Find Your Perfect Spaceship</h2>
			</div>
			<section id="ship-features">
				<div className="row no-margin">
					<div className="col-lg-6 col-md-6 col-sm-12 no-padding">
						<div className="row no-margin">
							<div className="col-12 no-padding white-border  wow fadeInUp">
								<img src="img/landing_page/spaceship1_back.jpg" className="img-fluid" alt="Responsive image" />
								 <div className="ship-title">
									<p className="text-left">{ships[0]} <span className="badge red">New</span></p> 
									<p className="text-right"><i className="fa fa-chevron-right"></i></p>
								</div>
							</div>
						</div>
						<div className="row no-margin">
							<div className="col-lg-6 col-md-12 col-sm-12 no-padding white-border wow fadeInUp" data-wow-delay="0.2s">
								<img src="img/landing_page/spaceship2.jpg" className="img-fluid" alt="Responsive image" />
								<div className="ship-title">
									<p className="text-left">{ships[1]}</p> 
									<p className="text-right"><i className="fa fa-chevron-right"></i></p>
								</div>
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12 no-padding white-border wow fadeInUp " data-wow-delay="0.2s">
								<img src="img/landing_page/spaceship8.jpg" className="img-fluid" alt="Responsive image" />
								<div className="ship-title">
									<p className="text-left">{ships[2]}</p> 
									<p className="text-right"><i className="fa fa-chevron-right"></i></p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 no-padding">
						<div className="row no-margin">
							<div className="col-lg-6 col-md-12 col-sm-12 no-padding white-border wow fadeInUp">
								<img src="img/landing_page/spaceship4.jpg" className="img-fluid" alt="Responsive image" />
								<div className="ship-title">
									<p className="text-left">{ships[3]}</p> 
									<p className="text-right"><i className="fa fa-chevron-right"></i></p>
								</div>
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12 no-padding white-border wow fadeInUp">
								<img src="img/landing_page/spaceship5.jpg" className="img-fluid" alt="Responsive image" />
								<div className="ship-title">
									<p className="text-left">{ships[4]}</p> 
									<p className="text-right"><i className="fa fa-chevron-right"></i></p>
								</div>
							</div>
						</div>
						<div className="row no-margin">
							<div className="col-12 no-padding white-border wow fadeInUp" data-wow-delay="0.2s">
								<img src="img/landing_page/spaceship6.jpg" className="img-fluid" alt="Responsive image" />
								<div className="ship-title">
									<p className="text-left">{ships[5]}</p> 
									<p className="text-right"><i className="fa fa-chevron-right"></i></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="row no-margin">
					<div className="col-lg-6 col-md-6 col-sm-12 no-padding white-border wow fadeInUp" data-wow-delay="0.4s">
						<img src="img/landing_page/spaceship9.jpg" className="img-fluid" alt="Responsive image" />
						<div className="ship-title">
							<p className="text-left">{ships[6]}</p> 
							<p className="text-right"><i className="fa fa-chevron-right"></i></p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 no-padding white-border wow fadeInUp" data-wow-delay="0.4s">
						<img src="img/landing_page/spaceship3.jpg" className="img-fluid" alt="Responsive image" />
						<div className="ship-title">
							<p className="text-left">{ships[7]}</p> 
							<p className="text-right"><i className="fa fa-chevron-right"></i></p>
						</div>
					</div>
				</div>

			</section>
		</div>
	);
  }
}

var PRODUCTS = [
  {
            "name": "Twin Ion Engine Starfighter",
            "manufacturer": "Sienar Fleet Systems",
            "class": "Starfighter",
            "techspecs": {
                "length": "8.99 m",
                "maxaccel": "4,100 G",
                "MGLT": "100 MGLT",
                "maxatmosphericspeed": "1,200 km/h",
                "hull": "Titanium alloy hull",
                "sensor": "SFS S-c3.8 multi-range TAG",
                "targeting": "SFS T-s8 targeting computer",
                "armament": "SFS L-s1 laser cannons",
                "communications": "AE-35 subspace transceiver"
            }
        },
        {
            "name": "T-65 X-wing Starfighter",
            "manufacturer": "Incom Corporation",
            "class": "Starfighter",
            "price": "149,999 credits",
            "techspecs": {
                "length": "12.5 m",
                "maxaccel": "3,700 G",
                "MGLT": "100 MGLT",
                "maxatmosphericspeed": "1,050 km/h",
                "shielding": "Chempat Defender deflector shield generator",
                "hull": "Titanium alloy hull",
                "sensor": "Fabritech ANs-5d full-spectrum transceiver",
                "targeting": "IN-344-B Sightline holographic imaging system",
                "armament": "Taim & Bak KX9",
                "communications": "Subspace transceiver"
            }
        },
        {
            "name": "Y-wing Starfighter",
            "manufacturer": "Koensayr Manufacturing",
            "class": "Starfighter",
            "price": "134,999 credits",
            "techspecs": {
                "length": "23.4 m",
                "maxaccel": "2,700 G",
                "MGLT": "80 MGLT",
                "maxatmosphericspeed": "1,000 km/h",
                "shielding": "Chempat shields",
                "hull": "Titanium-reinforced Alusteel alloy",
                "sensor": "Fabritech ANs-5d full-spectrum transceiver with PA-9r long range phased tachyon",
                "targeting": "Fabritech ANc 2.7 tracking computer",
                "armament": "Light ArMek turreted SW-4 ion cannons",
                "communications": "AE-35 subspace transceiver"
            }
        },
        {
            "name": "YT-1300 Light Freighter",
            "manufacturer": "Corellian Engineering Corporation",
            "class": "Light freighter",
            "price": "100,000 credits",
            "techspecs": {
                "length": "34.75 m",
                "maxatmosphericspeed": "800 km/h",
                "shielding": "Chempat shields",
                "hull": "Titanium alloy",
                "armament": "Laser cannons",
                "communications": "Subspace transceiver"
            }
        },
        {
            "name": "Alpha-class Xg-1 Star Wing",
            "manufacturer": "Cygnus Spaceworks",
            "class": "Starfighter",
            "price": "125,000 credits",
            "techspecs": {
                "length": "10 m",
                "maxaccel": "2,500 G",
                "MGLT": "90 MGLT",
                "maxatmosphericspeed": "1,050 km/h",
                "shielding": "Novaldex forward and rear projecting shield system",
                "hull": "Quadanium steel-armored titanium hull",
                "armament": "SFS M-s3 concussion missile launchers",
                "communications": "Subspace transceiver"
            }
        },
        {
            "name": "Lambda-class T-4a shuttle",
            "manufacturer": "Cygnus Spaceworks",
            "class": "Transport shuttle",
            "price": "240,000 credits",
            "techspecs": {
                "length": "20 m",
                "maxaccel": "1,400 G",
                "MGLT": "50 MGLT",
                "maxatmosphericspeed": "850 km/h",
                "shielding": "Multiple shield generators",
                "hull": "Reinforced durasteel/carbon fiber hull",
                "armament": "Steerable forward twin Taim & Bak KX5 laser cannons",
                "communications": "HoloNet transceiver"
            }
        },
        {
            "name": "RZ-1 A-wing interceptor",
            "manufacturer": "Alliance Underground Engineering",
            "class": "Starfighter",
            "price": "175,000 credits",
            "techspecs": {
                "length": "9.6 m",
                "maxaccel": "5,100 G",
                "MGLT": "120 MGLT",
                "maxatmosphericspeed": "1,300 km/h",
                "shielding": "Sirplex Z-9 deflector shield projector",
                "hull": "Titanium alloy frame and durasteel outer hull",
                "armament": "Borstel RG-9 laser cannons",
                "communications": "Subspace transceiver"
            }
        },
        {
            "name": "B-wing heavy assault starfighter",
            "manufacturer": "Gial Ackbar",
            "class": "Starfighter",
            "price": "220,000 credits",
            "techspecs": {
                "length": "16.9 m",
                "maxaccel": "2,390 G",
                "MGLT": "91 MGLT",
                "maxatmosphericspeed": "950 km/h",
                "shielding": "Sirplex Zr-41 shield generator",
                "hull": "Reinforced durasteel",
                "armament": "ArMek SW-7a light ion cannons",
                "communications": "Subspace transceiver"
            }
        }
];

export default Home