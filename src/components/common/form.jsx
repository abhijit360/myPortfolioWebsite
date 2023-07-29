import { Formik, useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import "./styles/form.css";

const validate = (values) => {
	const errors = {};
	const emailPattern = new RegExp("(w+)@(w+).com");

	if (!values.name) {
		errors.name = "Required";
	}

	if (!values.email) {
		errors.email = "Required";
	} else if (!emailPattern.test(values.email)) {
		errors.email = "Enter a valid email";
	}

	if (!values.subject) {
		errors.subject = "Required";
	}

	if (!values.message) {
		errors.message = "Required";
	}

	return errors;
};

export const ContactMeForm = () => {
	const [formSubmission, setFormSubmission] = useState(false);

	const form = useRef();

	const formik = useFormik({
		initialValues: {
			email: "",
			name: "",
			subject: "",
			message: "",
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_jvz8sk8",
				"template_9j2s9sh",
				form.current,
				"TAjFzmiiPBeD43mmS"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		setTimeout(() => {
			setFormSubmission(false);
		}, 3000);

		formik.setFieldValue("email", "");
		formik.setFieldValue("name", "");
		formik.setFieldValue("subject", "");
		formik.setFieldValue("message", "");
	};

	return (
		<div className="contactForm-container">
			{setFormSubmission && (
				<div className="formSubmissionMessage">Email sent!</div>
			)}
			<form ref={form} className="contactForm" onSubmit={sendEmail}>
				<div className="contactForm-inputField">
					<label className="contactForm-label" htmlFor="Name">
						Your Name:
					</label>
					<input
						id="name"
						name="name"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.name}
						className="contactForm-input"
					></input>
				</div>
				{formik.touched.name && formik.errors.name ? (
					<div className="contactForm-error">
						{formik.errors.name}
					</div>
				) : null}

				<div className="contactForm-inputField">
					<label className="contactForm-label" htmlFor="email">
						Your Email Address:
					</label>
					<input
						id="email"
						name="email"
						type="email"
						onChange={formik.handleChange}
						value={formik.values.email}
						className="contactForm-input"
					></input>
				</div>
				{formik.touched.email && formik.errors.email ? (
					<div className="contactForm-error">
						{formik.errors.email}
					</div>
				) : null}

				<div className="contactForm-inputField">
					<label className="contactForm-label" htmlFor="subject">
						Subject:
					</label>
					<input
						id="subject"
						name="subject"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.subject}
						className="contactForm-input"
					></input>
				</div>
				{formik.touched.subject && formik.errors.subject ? (
					<div className="contactForm-error">
						{formik.errors.subject}
					</div>
				) : null}
				<div className="contactForm-inputField ">
					<label className="contactForm-label" htmlFor="message">
						Message:
					</label>
					<textarea
						id="message"
						name="message"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.message}
						className="contactForm-input-message"
					></textarea>
				</div>
				{formik.touched.message && formik.errors.message ? (
					<div className="contactForm-error">
						{formik.errors.message}
					</div>
				) : null}
				<button
					className="contactForm-btn"
					type="submit"
					onClick={() => {
						setFormSubmission(true);
					}}
				>
					Send email
				</button>
			</form>
		</div>
	);
};
