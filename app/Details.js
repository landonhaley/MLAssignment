import React, { Component } from 'react'

class Details extends Component {
  render() {
    return (
		<div>
			<ItemListing 
			item={this.props.location.query.item}
			products={PRODUCTS}/>
		</div>
    );
  }
}

class ItemListing extends Component {
  render() {
	var _ship = getIndex(this.props.item, this.props.products, "name");
    return (
		<main className="mt-5">
			<div className="container">
				<div className="row">
					<MainColumn ship={_ship} />
					<Sidebar ship={_ship} />
				</div>
			</div>
		</main>
	);
  }
}

class MainColumn extends Component {
  render() {
	var _ship = this.props.ship;
    return (
		<div className="col-lg-8">
			<div className="row wow fadeIn specs" data-wow-delay="0.2s">
				<div className="col-md-12">
					<div className="product-wrapper">
						<PhotoSlider ship={_ship} />
						<br />
						<h2 className="h2-responsive">Twin Ion Engine Starfighter</h2>
						<hr />
						<ProductData ship={_ship} />
					</div>
				</div>
			</div>
		</div>
	);
  }
}

class PhotoSlider extends Component {
  render() {
	var _ship = this.props.ship;
    return (
		<div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
			<ol className="carousel-indicators">
				<li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
				<li data-target="#carousel-example-1z" data-slide-to="1"></li>
				<li data-target="#carousel-example-1z" data-slide-to="2"></li>
			</ol>
			<div className="carousel-inner" role="listbox">
				<div className="carousel-item active">
					<div className="view overlay hm-white-light z-depth-1-half">
						<img src="img/landing_page/spaceship3.jpg" className="img-fluid " alt="" />
						<div className="mask">
						</div>
						<h3 className="price"><span className="badge red darken-2">Hot Deal</span></h3>
					</div>
				</div>
				<div className="carousel-item">
					<div className="view overlay hm-white-light z-depth-1-half">
						<img src="img/landing_page/spaceship4.jpg" className="img-fluid " alt="" />
						<div className="mask">
						</div>
						<h3 className="price"><span className="badge red darken-2">Hot Deal</span></h3>
					</div>
				</div>
				<div className="carousel-item">
					<div className="view overlay hm-white-light z-depth-1-half">
						<img src="img/landing_page/spaceship5.jpg" className="img-fluid " alt="" />
						<div className="mask">
						</div>
						<h3 className="price"><span className="badge red darken-2">Hot Deal</span></h3>
					</div>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
  }
}


class ProductData extends Component {
  render() {
	var _ship = this.props.ship;
    return (
		<div className="row features-small">
			<div className="col-md-6">
				<div className="row">
					<div className="col-1">
						<i className="fa fa-rebel wattos-secondary-color"></i>
					</div>
					<div className="col-10">
						<h5 className="feature-title">Shielding</h5>
						<p className="grey-text">{this.props.ship.techspecs.shielding} </p>
						<div className="spacer-container"></div>
					</div>
				</div>
				<div className="row">
					<div className="col-1">
						<i className="fa fa-rebel wattos-secondary-color"></i>
					</div>
					<div className="col-10">
						<h5 className="feature-title">Hull</h5>
						<p className="grey-text">{this.props.ship.techspecs.hull} </p>
						<div className="spacer-container"></div>
					</div>
				</div>
				<div className="row">
					<div className="col-1">
						<i className="fa fa-rebel wattos-secondary-color"></i>
					</div>
					<div className="col-10">
						<h5 className="feature-title">Sensor</h5>
						<p className="grey-text">{this.props.ship.techspecs.sensor} </p>
						<div className="spacer-container"></div>
					</div>
				</div>
			</div>
			<div className="col-md-6">
				<div className="row">
					<div className="col-1">
						<i className="fa fa-rebel wattos-secondary-color"></i>
					</div>
					<div className="col-10">
						<h5 className="feature-title">Targeting</h5>
						<p className="grey-text">{this.props.ship.techspecs.targeting} </p>
						<div className="spacer-container"></div>
					</div>
				</div>
				<div className="row">
					<div className="col-1">
						<i className="fa fa-rebel wattos-secondary-color"></i>
					</div>
					<div className="col-10">
						<h5 className="feature-title">Amament</h5>
						<p className="grey-text">{this.props.ship.techspecs.amament} </p>
						<div className="spacer-container"></div>
					</div>
				</div>
				<div className="row">
					<div className="col-1">
						<i className="fa fa-rebel wattos-secondary-color"></i>
					</div>
					<div className="col-10">
						<h5 className="feature-title">Communications</h5>
						<p className="grey-text">{this.props.ship.techspecs.communications} </p>
						<div className="spacer-container"></div>
					</div>
				</div>
			</div>
		</div>
	);
  }
}



class Sidebar extends Component {
  render() {
	var _ship = this.props.ship;
    return (
		<div className="col-lg-4 wow fadeIn sidebar" data-wow-delay="0.4s">
			<Pricing ship={_ship} />
			<Specs ship={_ship} />
		</div>
	);
  }
}

class Pricing extends Component {
  render() {
    return (
		<div className="widget-wrapper">
			<div className="card">
				<div className="text-center">
					<div className="card-block">
						<h5>{this.props.ship.manufacturer}</h5>
						<div className="flex-center">
							<div className="card-circle">
								<img className="starfighter-className" src="img/svg/Starfighter.svg" height="80" width="70" alt="Starfighter" />
							</div>
						</div>
						<h2><strong>{this.props.ship.price}</strong></h2>
						<p className="no-margin">Certified pre-owned</p>
						<p className="no-margin">No money down</p>
						<p>0% financing for 12 months</p>
						<a className="btn wattos-secondary-btn oval-btn waves-effect waves-light">Buy now</a>
					</div>
				</div>

			</div>
		</div>
	);
  }
}


class Specs extends Component {
  render() {
    return (
		<div className="widget-wrapper wow fadeIn specs" data-wow-delay="0.4s">
			<h4>Specs</h4>
			<br />
			<div className="list-group">
				<div className="list-group-item row no-margin">
					<div className="col-lg-8 col-md-8 col-sm-6 no-padding">Length</div>
					<div className="col-lg-4 col-md-4 col-sm-6 no-padding text-lg-right text-md-right text-sm-right grey-text">{this.props.ship.techspecs.length}</div>
				</div>
				<div className="list-group-item row no-margin">
					<div className="col-lg-8 col-md-8 col-sm-6 no-padding">Max Acceleration</div>
					<div className="col-lg-4 col-md-4 col-sm-6 no-padding text-lg-right text-md-right text-sm-right grey-text">{this.props.ship.techspecs.maxaccel}</div>
				</div>
				<div className="list-group-item row no-margin">
					<div className="col-lg-8 col-md-8 col-sm-6 no-padding">MGLT</div>
					<div className="col-lg-4 col-md-4 col-sm-6 no-padding text-lg-right text-md-right text-sm-right grey-text">{this.props.ship.techspecs.MGLT}</div>
				</div>
				<div className="list-group-item row no-margin">
					<div className="col-lg-8 col-md-8 col-sm-6 no-padding">Max Atmospheric Speed</div>
					<div className="col-lg-4 col-md-4 col-sm-6 no-padding text-lg-right text-md-right text-sm-right grey-text">{this.props.ship.techspecs.maxatmosphericspeed}</div>
				</div>
			</div>
		</div>
	);
  }
}




function getIndex(value, arr, prop) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i][prop] === value) {
			return arr[i];
		}
	}
	return null; //to handle the case where the value doesn't exist
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


export default Details