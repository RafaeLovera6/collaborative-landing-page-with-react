import React from "react";
import ReactDOM from "react-dom";

const Contact = () => {
	return (
		<>
			<div className="row">
				<div className="col-12">
					<h1>Contact</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce volutpat commodo dolor, id pulvinar leo efficitur
						a. Sed sed lacinia urna, sit amet tincidunt odio.
						Integer condimentum et neque ac bibendum. Nulla
						ullamcorper egestas tortor, id feugiat augue ullamcorper
						non. Donec ac felis dignissim, fermentum tortor aliquam,
						finibus lacus.
					</p>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-7 bg-light rounded p-3">
					<form>
						<div className="form-group row">
							<div className="col-3 text-right font-weight-bold">
								<label
									className="col-form-label"
									for="exampleInputEmail1">
									Your E-mail
								</label>
							</div>
							<div className="col-9">
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Your email"></input>
							</div>
						</div>

						<div className="form-group row">
							<div className="col-3 text-right font-weight-bold">
								<label
									className="col-form-label"
									for="exampleInputPassword1">
									Your Message
								</label>
							</div>
							<div className="col-9">
								<textarea
									className="form-control"
									id="Mensaje"
									rows="5"
									placeholder="Please enter your message here..."></textarea>
							</div>
						</div>
						<div className="form-group row justify-content-end">
							<div className="col-auto">
								<button
									type="submit"
									className="btn btn-primary pt-2 pb-2 pl-3 pr-3">
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
