import React, { useEffect, useState } from "react";
import { fetchUsersInsider, searchFilter } from "../../store/slices/authSlice";
import { handleLoginAuth, setLogout } from "../login/redux/loginSlice";
import { useAppSelector, useAppDispatch } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";
import DataTable from "react-data-table-component";
import AfterLogin from "../../layouts/Private/AfterLogin";
import debounce from "lodash";
import Loader from "../../components/Common/Loader";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { BiTrash, BiEdit, BiPlus } from "react-icons/bi";
import ModelLayout from "../../components/Common/Model";
import { Link, NavLink, useNavigate } from "react-router-dom";
import FormSwitch from "../../components/Common/FormFields/FormSwitch";
import BreadCrumb from "../../components/Common/BreadCrumb";

const UserList = ({ moduleName }: any) => {
  const dispatch = useAppDispatch();
  const { userInsider, totalUser } = useAppSelector(
    (state) => state.beforeLogin
  );
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [showPop, setShowPop] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    dispatch(fetchUsersInsider([page, perPage]));
  }, []);

  const handleModelOpen = (name: string) => {
    setShowPop(true);
    setUsername(name);
  };

  const handleClose = () => {
    setShowPop(false);
  };

  const columns = [
    {
      name: "Name",
      selector: (row: any) => row.first_name + " " + row.last_name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: any) => row.email,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row: any) =>
        row.id % 2 === 0 ? (
          <FormSwitch checkedMark={true} />
        ) : (
          <FormSwitch checkedMark={false} />
        ),
    },
    {
      name: "Actions",
      cell: (row: any) => (
        <>
          <button
            onClick={() =>
              handleModelOpen(row.first_name + " " + row.last_name)
            }
            className="btn p-0"
            title="Trash"
          >
            <BiTrash size={22} color="red" />
          </button>
          <button
            onClick={() => navigate("/userform", { state: row })}
            className="btn p-0 ms-4"
            title="Edit"
          >
            <BiEdit size={22} color="blue" />
          </button>
        </>
      ),
    },
  ];

  const handlePageChange = (page: number) => {
    dispatch(fetchUsersInsider([page, perPage]));
    setPage(page);
  };

  const handlePerRowsChange = (newPerPage: number, page: number) => {
    setPerPage(newPerPage);
    dispatch(fetchUsersInsider([page, newPerPage]));
  };

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = userInsider.filter(
    (item) =>
      item.first_name + item.last_name &&
      (
        item.first_name +
        item.last_name +
        (item.id % 2 === 0 ? "active2" : "inactive")
      )
        .toLowerCase()
        .includes(filterText.toLowerCase())
  );

  const FilterComponent = ({ filterText, onFilter, onClear }: any) => (
    <div className="userlist_header">
      <div className="d-flex align-items-center row">
        <div className="col-md-2 ">Filter by:</div>
        <div className="col-md-3 mt-3 mt-md-0">
          <Form.Select
            onChange={(e: any) => setFilterText(e.target.value)}
            aria-label="Default select example"
          >
            <option value="">Status</option>
            <option value="active2">Active</option>
            <option value="inactive">Inactive</option>
          </Form.Select>
        </div>
        <div className="col-md-3 mt-3 mt-md-0">
          <Form.Select aria-label="Default select example">
            <option value="">Date</option>
            <option value="1">Active</option>
            <option value="2">Inactive</option>
          </Form.Select>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <input
            autoFocus={true}
            placeholder="Search data"
            type="text"
            value={filterText}
            onChange={onFilter}
            className="searchfilterbox"
          />
        </div>
      </div>
    </div>
  );

  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <FilterComponent
        onFilter={(e: any) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const modelBody = () => {
    return <>Are you sure want to delete {username}?</>;
  };

  return (
    // <AfterLogin>
    <div className="container mt-2">
      <div className="module_name mb-4 d-flex justify-content-between align-items-center">
        <div className="module_name_left">
          <h3>{moduleName}</h3>
          <BreadCrumb />
        </div>
        <Link to="/userform">
          <button className="btn btn-primary py-2">
            Add New <BiPlus />
          </button>
        </Link>
      </div>
      {userInsider.length > 0 ? (
        <>
          <DataTable
            className="mt-3 user_list_table"
            columns={columns}
            data={filteredItems}
            selectableRows
            pagination
            paginationServer
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handlePerRowsChange}
            paginationTotalRows={totalUser}
            highlightOnHover
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            paginationResetDefaultPage={resetPaginationToggle}
            paginationPerPage={perPage}
            paginationRowsPerPageOptions={[5, 10, 15, 20]}
            striped
          />
          <ModelLayout
            show={showPop}
            modelBody={modelBody}
            modelTitle={"Delete"}
            modelFooter={true}
            handleClose={handleClose}
          />
        </>
      ) : (
        <div className="text-center mt-4">
          <Loader />
        </div>
      )}
    </div>
    // </AfterLogin>
  );
};

export default UserList;
