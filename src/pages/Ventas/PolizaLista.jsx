import { Link } from "react-router-dom";

import { FaStoreAlt, FaBuilding } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

import TablaPolizasPV from "./components/TableVent";
import { useEffect, useState } from "react";
import { listarPolizasPorPV } from "../../api/polizas";
import { useAuth } from "../Login/AuthContext";
import { IoPricetagSharp } from "react-icons/io5";
import Breadcrumb from "../../components/Breadcrumb";

export default function PolizaLista() {
  
}