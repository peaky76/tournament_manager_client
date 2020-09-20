import React, { Component } from "react";

const PersonDetails = ({ person }) => {
  if (!person) {
    return <p>Loading...</p>;
  }
  return (
    <section className="component-display">
      <ul>
        <li>
          {person.firstName} {person.lastName}
        </li>
        <li>{person.nationality}</li>
        <li>{person.dateOfBirth}</li>
      </ul>
    </section>
  );
};

export default PersonDetails;

// import Request from "../../helpers/request";

// class PersonCreateForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       nationality: "",
//       dateOfBirth: null,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleEdit = this.handleEdit.bind(this);
//   }

//   componentDidMount() {
//     this.setState({
//       firstName: this.props.person.firstName,
//       lastName: this.props.person.lastName,
//       nationality: this.props.person.nationality,
//       dateOfBirth: this.props.person.dateOfBirth,
//     });
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   handleEdit() {
//     const request = new Request();
//     const person = {
//       firstName: this.state.firstName,
//       lastName: this.state.lastName,
//       nationality: this.state.nationality,
//       dateOfBirth: this.state.dateOfBirth,
//     };
//     request.edit("http://localhost:8080/api/people", person).then((res) => console.log(res));
//     // .then(() => (window.location = "/people"));
//   }

//   render() {
//     return (
//       <form id="form-person-create" className="form-create" onSubmit={this.handlePost}>
//         <div className="form-input-field">
//           <label htmlFor="input-first-name">First name:</label>
//           <input
//             type="text"
//             id="input-first-name"
//             name="firstName"
//             value={this.state.firstName}
//             onChange={this.handleChange}
//           ></input>
//         </div>
//         <div className="form-input-field">
//           <label htmlFor="input-last-name">Last name:</label>
//           <input
//             type="text"
//             id="input-last-name"
//             name="lastName"
//             value={this.state.lastName}
//             onChange={this.handleChange}
//           ></input>
//         </div>
//         <div className="form-input-field">
//           <label htmlFor="select-nationality">Nationality:</label>
//           <select id="select-nationality" name="nationality" onChange={this.handleChange}>
//             <option value="England">England</option>
//             <option value="France">France</option>
//             <option value="Scotland">Scotland</option>
//             <option value="Slovakia">Slovakia</option>
//             <option value="Spain">Spain</option>
//           </select>
//         </div>
//         <div className="form-input-field">
//           <label htmlFor="input-dob">Date of birth:</label>
//           <input type="date" id="input-dob" name="dateOfBirth" onChange={this.handleChange} />
//         </div>
//         <button className="button-submit">Submit</button>
//       </form>
//     );
//   }
// }

// export default PersonCreateForm;
