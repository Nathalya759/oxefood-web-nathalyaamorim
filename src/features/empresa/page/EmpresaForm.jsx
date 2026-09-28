import { useState } from "react";
import { toast } from "react-toastify";
import BackButton from "../../../shared/components/BackButton";
import Breadcrumbs from "../../../shared/components/Breadcrumbs";
import Footer from "../../../shared/components/Footer";
import Menu from "../../../shared/components/Menu";
import SaveButton from "../../../shared/components/SaveButton";
import { cadastrar } from "../../../shared/services/crudService";
import { MAPPING_CONTROLLER_EMPRESA } from "../service/empresaService";

export default function EmpresaForm() {

    const [empresa, setEmpresa] = useState({
        site: "",
        cnpj: "",
        inscricaoEstadual: "",
        nomeEmpresarial: "",
        nomeFantasia: "",
        fone: "",
        foneAlternativo: ""
    });

    async function salvar() {

        try {
            await cadastrar(MAPPING_CONTROLLER_EMPRESA, empresa);
            toast.success("Empresa cadastrada com sucesso!");

            setEmpresa({
                site: "",
                cnpj: "",
                inscricaoEstadual: "",
                nomeEmpresarial: "",
                nomeFantasia: "",
                fone: "",
                foneAlternativo: ""
            });

        } catch (erro) {
            toast.error("Erro ao cadastrar empresa.");
        }
    }

    return (
        <div>

            <Menu />

            <Breadcrumbs
                items={[
                    { label: "Empresa" },
                    { label: "Cadastrar" }
                ]}
            />

            <div
                style={{
                    marginTop: "40px",
                    marginLeft: "10%",
                    marginRight: "10%"
                }}
            >

                <div className="overflow-x-auto shadow-sm">

                    <div
                        className="flex items-center justify-between mb-6"
                        style={{
                            marginTop: "20px",
                            marginLeft: "10px",
                            marginRight: "10px"
                        }}
                    >
                        <h1 className="text-3xl font-bold text-gray-800">
                            Nova Empresa
                        </h1>
                    </div>

                    <div className="divider divider-info" />

                    <div
                        className="overflow-x-auto"
                        style={{ padding: "30px" }}
                    >

                        <form>

                            {/* SITE E CNPJ */}
                            <div className="flex w-full">

                                <div
                                    className="card rounded-box grid grow p-8"
                                    style={{ padding: "30px" }}
                                >
                                    <fieldset className="fieldset w-full">

                                        <label
                                            className="fieldset-legend"
                                            htmlFor="site"
                                        >
                                            Site
                                        </label>

                                        <input
                                            type="text"
                                            id="site"
                                            className="input input-bordered w-full"
                                            value={empresa.site}
                                            onChange={(e) =>
                                                setEmpresa({
                                                    ...empresa,
                                                    site: e.target.value
                                                })
                                            }
                                        />

                                    </fieldset>
                                </div>

                                <div
                                    className="card rounded-box grid grow p-8"
                                    style={{ padding: "30px" }}
                                >
                                    <fieldset className="fieldset w-full">

                                        <label
                                            className="fieldset-legend"
                                            htmlFor="cnpj"
                                        >
                                            CNPJ
                                        </label>

                                        <input
                                            type="text"
                                            id="cnpj"
                                            className="input input-bordered w-full"
                                            value={empresa.cnpj}
                                            onChange={(e) =>
                                                setEmpresa({
                                                    ...empresa,
                                                    cnpj: e.target.value
                                                })
                                            }
                                        />

                                    </fieldset>
                                </div>

                            </div>

                            {/* INSCRIÇÃO ESTADUAL */}
                            <div className="flex w-full">

                                <div
                                    className="card rounded-box grid grow p-8"
                                    style={{ padding: "30px" }}
                                >
                                    <fieldset className="fieldset w-full">

                                        <label
                                            className="fieldset-legend"
                                            htmlFor="inscricaoEstadual"
                                        >
                                            Inscrição Estadual
                                        </label>

                                        <input
                                            type="text"
                                            id="inscricaoEstadual"
                                            className="input input-bordered w-full"
                                            value={empresa.inscricaoEstadual}
                                            onChange={(e) =>
                                                setEmpresa({
                                                    ...empresa,
                                                    inscricaoEstadual: e.target.value
                                                })
                                            }
                                        />

                                    </fieldset>
                                </div>

                            </div>

                            {/* NOME EMPRESARIAL E NOME FANTASIA */}
                            <div className="flex w-full">

                                <div
                                    className="card rounded-box grid grow p-8"
                                    style={{ padding: "30px" }}
                                >
                                    <fieldset className="fieldset w-full">

                                        <label
                                            className="fieldset-legend"
                                            htmlFor="nomeEmpresarial"
                                        >
                                            Nome Empresarial
                                        </label>

                                        <input
                                            type="text"
                                            id="nomeEmpresarial"
                                            className="input input-bordered w-full"
                                            value={empresa.nomeEmpresarial}
                                            onChange={(e) =>
                                                setEmpresa({
                                                    ...empresa,
                                                    nomeEmpresarial: e.target.value
                                                })
                                            }
                                        />

                                    </fieldset>
                                </div>

                                <div
                                    className="card rounded-box grid grow p-8"
                                    style={{ padding: "30px" }}
                                >
                                    <fieldset className="fieldset w-full">

                                        <label
                                            className="fieldset-legend"
                                            htmlFor="nomeFantasia"
                                        >
                                            Nome Fantasia
                                        </label>

                                        <input
                                            type="text"
                                            id="nomeFantasia"
                                            className="input input-bordered w-full"
                                            value={empresa.nomeFantasia}
                                            onChange={(e) =>
                                                setEmpresa({
                                                    ...empresa,
                                                    nomeFantasia: e.target.value
                                                })
                                            }
                                        />

                                    </fieldset>
                                </div>

                            </div>

                            {/* TELEFONES */}
                            <div className="flex w-full">

                                <div
                                    className="card rounded-box grid grow p-8"
                                    style={{ padding: "30px" }}
                                >
                                    <fieldset className="fieldset w-full">

                                        <label
                                            className="fieldset-legend"
                                            htmlFor="fone"
                                        >
                                            Telefone
                                        </label>

                                        <input
                                            type="text"
                                            id="fone"
                                            className="input input-bordered w-full"
                                            value={empresa.fone}
                                            onChange={(e) =>
                                                setEmpresa({
                                                    ...empresa,
                                                    fone: e.target.value
                                                })
                                            }
                                        />

                                    </fieldset>
                                </div>

                                <div
                                    className="card rounded-box grid grow p-8"
                                    style={{ padding: "30px" }}
                                >
                                    <fieldset className="fieldset w-full">

                                        <label
                                            className="fieldset-legend"
                                            htmlFor="foneAlternativo"
                                        >
                                            Telefone Alternativo
                                        </label>

                                        <input
                                            type="text"
                                            id="foneAlternativo"
                                            className="input input-bordered w-full"
                                            value={empresa.foneAlternativo}
                                            onChange={(e) =>
                                                setEmpresa({
                                                    ...empresa,
                                                    foneAlternativo: e.target.value
                                                })
                                            }
                                        />

                                    </fieldset>
                                </div>

                            </div>

                            {/* BOTÕES */}
                            <div className="flex w-full">

                                <div
                                    className="card rounded-box grid grow p-8"
                                    style={{ padding: "30px" }}
                                >
                                    <div
                                        style={{
                                            marginTop: "50px",
                                            textAlign: "left"
                                        }}
                                    >
                                        <BackButton destino="/empresa" />
                                    </div>
                                </div>

                                <div
                                    className="card rounded-box grid grow p-8"
                                    style={{ padding: "30px" }}
                                >
                                    <div
                                        style={{
                                            marginTop: "50px",
                                            textAlign: "right"
                                        }}
                                    >
                                        <SaveButton save={() => salvar()} />
                                    </div>
                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    );
}