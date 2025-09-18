import { useEffect, useState } from "react";

import { FaStoreAlt, FaBuilding } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

import { genExcelPolizas, listarPolizas } from "../../api/polizas";

import InputField from "../../components/InputField"
import TablaPolizas from "./components/TablePoli";
import FiltrosOperaciones from "./components/FiltrosLista";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import Loading from "../../layout/Loading";
import { useAuth } from "../Login/AuthContext";
import Breadcrumb from "../../components/Breadcrumb";


export default function OperacionesLista() {
   
}
