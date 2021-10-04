import React from "react";
import { ToggleButton, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";

const SortingButtons = ({ setSortByIndex, sortDirection, setSortDirection }) => {
  return (
    <ButtonGroup>
      <ToggleButton
        id="toggle-sort"
        type="checkbox"
        variant="outline-dark"
        onChange={() => setSortDirection( sortDirection === 'ASC' ? 'DESC' : 'ASC' )}
      ><i className={sortDirection === 'ASC' ? "fas fa-arrow-up" : "fas fa-arrow-down"} /></ToggleButton>

      <DropdownButton onSelect={(eventKey) => setSortByIndex(eventKey)} as={ButtonGroup} title="Sort by" id="bg-nested-dropdown">
        <Dropdown.Item eventKey={0}>Due Date</Dropdown.Item>
        <Dropdown.Item eventKey={1}>Status</Dropdown.Item>
        <Dropdown.Item eventKey={2}>Title</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
};

export default SortingButtons;
