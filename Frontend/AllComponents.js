import React from 'react';
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
import mForm from './FormComponents/mForm'
import Header from './FormComponents/Header'
import Footer from'./FormComponents/Footer'
import Navbar from'./FormComponents/Navbar'
import Pagination from './FormComponents/Pagination'
import Table from './DataDisplayComp/Table'
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

class AllComponents extends React.Component {
  render() {
    return (
      <div>
        <InputField />
        <EmailInput />
        <PasswordInput />
        <TextArea />
        <Select />
        <RadioButton />
        <Checkbox />
        <Button />
        <Accordion />
        <Modal />
        <mForm />
        <Header />
        <Footer />
        <Navbar />
        <Pagination />
        <Table />
        <List />
        <ProgressBar />
        <LoadingSpinner />
        <Checklist />
        <VehicleList />
        <EquipmentList />
        <BarChart />
        <LineChart />
        <PieChart />
        <Data />
        <TableContainer />
      </div>
    );
  }
}

export default AllComponents;