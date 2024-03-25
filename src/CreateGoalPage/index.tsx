import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateRange, DayPicker } from 'react-day-picker';
import moment from "moment";
import Card from '../UIComponents/Card';
import Calendar from '../UIComponents/Calender';
import './styles.css'


const CreateGoalPage: React.FC = () => {
  const [user, setUser] = useState("");
  const [goalname, setGoalName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [range, setRange] = useState<DateRange | undefined>();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create a new goal object and save it to the API or local storage
    navigate('/GoalHomePage');
  };

  function onChange(dates: any) {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    console.log("startdate", moment(start).format("YYYY-MM-DDTHH:mm:ss"));
    console.log("enddate", end);
  }

  const css = `
  .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover {
    color: var(--rdp-selected-color);
    opacity: 1;
    background-color: #818cf8;
}
.rdp {
    border: solid #eeeeee 1px;
    padding: 10px;
    border-radius: 5%;
    box-shadow: 0.1em 0.1em 1em rgba(0,0,0,0.1);
}

  `

  return (
    <Card
        content={
          <div className="card-content">
            <div>
              <input
                id="standard-full-width"
                placeholder="Habit name"
                autoComplete="off"
              />
            </div>
            <div>
              <h1>
                Select start and end date
              </h1>
              <style>{css}</style>
              <Calendar/>
            </div>
            <div style={{ padding: "15px" }}>
              <h2 >Reminders</h2>
              <p>Default reminders are set to help you stay on track</p>

              <div style={{ paddingTop: "5px" }}>
                <h2>
                  Daytime reminder:
                </h2>
                <h2 style={{ fontWeight: "bold" }}>
                  {" "}
                  8:00AM
                </h2>
                <br />
                <h2>
                  Nighttime reminder:
                </h2>
                <h2 style={{ fontWeight: "bold" }}>
                  {" "}
                  8:00PM
                </h2>
              </div>
            </div>
            
          <button
            className=" 
            px-6
            rounded-full
            py-4
            text-white
            text-sm bg-indigo-400"
          >
            SAVE
          </button>
          </div>
        }
      />
  );
};

export default CreateGoalPage;