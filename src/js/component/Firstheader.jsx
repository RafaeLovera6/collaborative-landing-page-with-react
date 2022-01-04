import React from "react";

const Firstheader = () => {
	return (
		<div className="row">
			<div id="fhd1" className="col-8 mx-auto">
				<h5>
					This First Heading{" "}
					<span className="text-secondary">Will Catch Your Eye</span>
					<br></br>
				</h5>
				<h8>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Quisque tempus vitae magna efficitur consectetur. Nulla non
					purus fringilla, pulvinar diam vel, finibus augue.
					Suspendisse ac orci ac odio scelerisque tincidunt. Aliquam
					fermentum vitae mi et semper. Suspendisse lectus tellus,
					tempor condimentum nulla a, convallis faucibus sapien.
					Phasellus non metus ut turpis dignissim maximus quis quis
					enim. Etiam fermentum lacus a nisl lacinia, et egestas nunc
					suscipit. Pellentesque non euismod dolor, non posuere
					sapien.
				</h8>
			</div>
			<div className="col-4">
				<img
					className="rounded-circle"
					height="300px"
					src="https://raw.githubusercontent.com/mortegac/collaborative-grupo16/e894ed07187c68beb8b6cc45daf00b2c8b7cd4ec/website1/assets/img/1.jpg"
				/>
			</div>
		</div>
	);
};

export default Firstheader;
