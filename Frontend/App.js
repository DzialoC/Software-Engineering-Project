import React, { useState } from 'react';
import './App.css';
import InputField from './FormComponents/InputField'
import EmailInput from './FormComponents/Email'
import PasswordInput from './FormComponents/Password'
import TextArea from './FormComponents/TextArea'
import Select from './FormComponents/DropMenu'
import RadioButton from './FormComponents/RadioButton'
import Checkbox from './FormComponents/Checkbox'
import Button from './FormComponents/Button'
import Accordion from'./FormComponents/Accordion'
import Modal from './FormComponents/Modal'
import Header from './FormComponents/Header'
import Footer from'./FormComponents/Footer'
import Pagination from './FormComponents/Pagination'
import List from './DataDisplayComp/List'
import ProgressBar from './DataDisplayComp/ProgressBar'
import LoadingSpinner from './DataDisplayComp/LoadingSpinner'
import Checklist from './DataDisplayComp/Checklist'
import VehicleList from'./DataDisplayComp/VehicleList'
import EquipmentList from './DataDisplayComp/EquipmentList'
import BarChart from './Charts/BarChart'
import LineChart from './Charts/LineChart'
import PieChart from './Charts/PieChart'
import { UserData } from './Charts/Data'
import TableContainer from './Milestone3/TableContainer'
import PublicWorksContainer from './Milestone3/PublicWorksContainer'
import Sidebar from './Milestone3/Sidebar';
import NavList from './Milestone3/NavList';
import MainContent from './Milestone3/MainContent';
import SearchBar from './Milestone3/SearchBar'
import InfoContainer from './Milestone3/InfoContainer';

function App() {

  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(''); // Add state for the selected option
  const [radioValue, setRadioValue] = useState('');
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Replace with the actual total number of pages.


  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckboxValues([...checkboxValues, value]);
    } else {
      setCheckboxValues(checkboxValues.filter((item) => item !== value));
    }
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  // Define the options for the select component
  const selectOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
 
  const handlePageChange = (page) => {
    // Handle page change logic here
    setCurrentPage(page);
  };

  /*
  Data Display Components
*/

  const tableData = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 28, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' },
    // Add more data as needed
  ];
  const listData = ['Item 1', 'Item 2', 'Item 3'];
  const progressValue = 70;
  const progressBarMax = 100;
  const isLoading = true;

  // Equipment List
  const equipmentData = [
    { id: 1, name: 'Equipment 1', status: 'Active' },
    { id: 2, name: 'Equipment 2', status: 'Inactive' },
    // Add more equipment data as needed
  ];

  //Charts
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "AC Public Works Trucks",
        data: UserData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


//////////////////////////////////////

  return (
    <div className="App">
      <h1>Software Engineer Project</h1>
      
      <Header />
      
    <PublicWorksContainer/>
    <NavList />
    <Sidebar />
    <MainContent />
    <SearchBar />
    <InfoContainer
        InfoHeader="Equipment"
        InfoRow="Row 1"
        SelectionCheckbox={true}
        ProjectName="Project A"
        Budget="$10,000"
        Status="Upcoming"
      />
      <InfoContainer
        InfoHeader="Incidents"
        InfoRow="Row 2"
        SelectionCheckbox={false}
        ProjectName="Project B"
        Budget="$15,000"
        Status="Current"
      />

      <InputField
        type="text"
        label="Text Input"
        placeholder="Enter text"
        value={textValue}
        onChange={handleTextChange}
      />
      <EmailInput
        label="Email Input"
        placeholder="Enter email"
        value={emailValue}
        onChange={handleEmailChange}
      />
      <PasswordInput
        label="Password Input"
        placeholder="Enter password"
        value={passwordValue}
        onChange={handlePasswordChange}
      />
      <TextArea
        label="Text Area"
        placeholder="Enter large text"
        value={textareaValue}
        onChange={handleTextareaChange}
      />
      <Select
        label="Select Option"
        options={selectOptions}
        value={selectedOption}
        onChange={handleSelectChange}
      />
        <RadioButton
        label="RadioButton 1"
        name="radioGroup"
        value="option1"
        checked={radioValue === 'option1'}
        onChange={handleRadioChange}
      />
      <RadioButton
        label="RadioButton 2"
        name="radioGroup"
        value="option2"
        checked={radioValue === 'option2'}
        onChange={handleRadioChange}
      />
      <h1>Table Example</h1>
      <TableContainer />



       <h1>Data Display Components</h1>
      <h2>List Component (Vertical)</h2>
      <List data={listData} 
      />
      <h2>List Component (Horizontal)</h2>
      <List data={listData} horizontal={true} 
      />

      <h2>ProgressBar Component</h2>
      <ProgressBar value={progressValue} max={progressBarMax} />

      <h2>LoadingSpinner Component</h2>
      {isLoading && <LoadingSpinner />}
     
      <Checkbox
        label="Checkbox 1"
        name="checkboxGroup"
        value="checkbox1"
        checked={checkboxValues.includes('checkbox1')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Checkbox 2"
        name="checkboxGroup"
        value="checkbox2"
        checked={checkboxValues.includes('checkbox2')}
        onChange={handleCheckboxChange}
      />
      <Button label="Open Modal" onClick={() => setIsModalOpen(true)} />
      <Button label="Toggle Accordion" onClick={() => setIsAccordionOpen(!isAccordionOpen)} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        Modal Content
      </Modal>

      <Accordion title="Accordion Title" isOpen={isAccordionOpen}>
        Accordion Content
      </Accordion>

      <mForm onSubmit={handleSubmit}>
        {/* Form Inputs */}
        <Button label="Submit" />
      </mForm>
            
      <div style={{ width: 350 }}>
        <BarChart chartData={userData} />
      </div>
      
    <div>
    ____________________________________________
    </div>

      <div style={{ width: 350 }}>
        <LineChart chartData={userData} />
      </div>
   
      <div>
    ____________________________________________
    </div>

      <div style={{ width: 300 }}>
        <PieChart chartData={userData} />
      </div>

      <VehicleList />
      
      <Checklist />
      
      <h1>Equipment List</h1>
      <EquipmentList equipmentData={equipmentData} />
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      
      <Footer />
    
    </div>
  );
}

export default App;
