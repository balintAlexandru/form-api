import React, { useState } from 'react';


const ApiForm = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sectionName, setSectionName] = useState('');
  const [sendTo, setMedicName] = useState('');
  //sendto
  const [sections, setSections] = useState([
    { id:1, title: "pneumologie", medics: ["popescu", "ionescu", "andreescu"] },
    { id:2, title: "cardiologie", medics: ["popescu1", "ionescu1", "andreescu1"] },
    { id:3, title: "RMN", laboratoare: ["RMNNNN", "ionescu2", "andreescu2"] }
  ]);
  const [show, setShow] = useState(false);
  const [ medicSection, setMedicSection ] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const model = { name, lastName, sectionName, sendTo };
    console.log(model);
    // fetch('http://localhost:8000/blogs/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(blog)
    // }).then(() => {
    //   console.log('new form added');
    // })
  }
 

  const myChange = (event) => {
    setSectionName(event.target.value);
    setShow(true)
    sections.forEach(section => {
      if(section.title === event.target.value){
        if(section.title === 'RMN'){
          setMedicSection(section.laboratoare);
        }
        else{
          setMedicSection(section.medics);
        }
      }
    });
  
  }
  const medicChange = (event) => {
    setMedicName(event.target.value);
  } 

  return (
    <div className="create">
      <h2>Api Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Nume</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Prenume</label>
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>Sectie</label>
        <select onChange={myChange}>
          {sections?.map((item) => {
            return (
              <option value={item.title}>{item.title}</option>
            )
          })}
        </select>

        {show && <div> 
        <label>Medici</label>
        <select onChange={medicChange}>
          {medicSection?.map((item) => {
            return (
              <option value={item}>{item}</option>
            )
          })}
        </select>
        </div>
        }

        <button>Add</button>
      </form>
    </div>
  );
}

export default ApiForm;