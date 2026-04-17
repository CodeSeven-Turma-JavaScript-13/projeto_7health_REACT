import { ChartLineUp, Clock, Leaf, Medal, RocketLaunchIcon } from "@phosphor-icons/react";
import { LeafIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Carrossel from "../../components/carrossel/Carrosel";
import ListarProduto from "../../components/produto/listarproduto/ListarProduto";

function Home() {
  return (
		<>
			<div className="mt-3 mb-7 md:mt-0">
				<Carrossel />
			</div>
			<div className="py-2 md:py-0 md:mb-4">
				<ListarProduto />
			</div>
		</>
	)

}

export default Home;
