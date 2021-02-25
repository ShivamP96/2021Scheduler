import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  console.log("name", name)
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  
  function reset() {
    setName("")
    setInterviewer(null)
  }

  function cancel(){
    props.onCancel()
    reset()
  }

  return(
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form
        onSubmit={event => event.preventDeafult()} 
        autoComplete="off">
          <input
          className="appointment__create-input text--semi-bold"
          value={name}
          type="text"
          placeholder="Enter Student Name"
          onChange={(event) => setName(event.target.value)}
         />
        </form>
        <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section classname="appointment__actions">
          <Button onClick={() => cancel()} danger>Cancel</Button>
          <Button onClick={props.onSave} confirm>Save</Button>
        </section>
      </section>
    </main>
  )
}