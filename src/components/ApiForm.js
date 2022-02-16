import React, { useState } from 'react';

const ApiForm = () => {
  // Create inputs variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sectionName, setSectionName] = useState('');
  const [sendTo, setSendTo] = useState('');

  // Create Sections variables
  const sections = ([
    { id:1, title: "Pneumologie", medics: ["Dr.Andrei", "Dr.Ionut", "Dr.Popescu"] },
    { id:2, title: "Cardiologie", medics: ["Dr.Alex", "Dr.Ionescu", "Dr.Petrescu"] },
    { id:3, title: "RMN", laboratoare: ["RMN Cerebral", "RMN Abdominal", "RMN Toracal"] }
  ]);

  // Create Help variables
  const [show, setShow] = useState(false);
  const [ medicSection, setMedicSection ] = useState([]);
  const [sendToTitle, setSendToTitle] = useState('');

  // Create functions
  const handleSubmit = (e) => {
    e.preventDefault();
    const model = { firstName, lastName, sectionName, sendTo };
    setFirstName('');
    setLastName('');
    setMedicSection([]);
    console.log(model);
      // Fetch server here





  }
  const sectionChange = (event) => {
    setShow(true)
    setSectionName(event.target.value);
    sections.forEach(section => {
      if(section.title === event.target.value){
        if(section.title === 'RMN'){
          setMedicSection(section.laboratoare);
          setSendToTitle('Laboratoare');
        }
        else{
          setMedicSection(section.medics);
          setSendToTitle('Medici');
        }
      }
    });
  }
  const sendToChange = (event) => {
    setSendTo(event.target.value);
  } 


  return (
    <div className="create">
      <h2>Api Form</h2>

      <form onSubmit={handleSubmit}>

        <label>First Name</label>
        <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label>Last Name</label>
        <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label>Section</label>
        <select onChange={sectionChange}>
          {sections?.map((item) => {
            return (
              <option value={item.title}>{item.title}</option>
            )
          })}
        </select>

        { show && 
            <div> 
             <label>{sendToTitle}</label>
             <select onChange={sendToChange}>
              {medicSection?.map((item) => {
                return (
                 <option value={item}>{item}</option>
                )
               })}
             </select>
            </div>
        }
        <button>Add Form</button>
      </form>
    </div>
  );
}

export default ApiForm;