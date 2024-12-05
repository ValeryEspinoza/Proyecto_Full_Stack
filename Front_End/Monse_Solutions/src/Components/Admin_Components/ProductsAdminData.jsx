import React, { useState, useEffect } from "react";
import GetData from "../../Services/Get/GetData";
import PutData from "../../Services/Put/PutData";
import DeleteData from "../../Services/Delete/DeleteData";
import PatchData from "../../Services/Patch/PatchData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.min.css";
import "../../Styles/Components_Styles/Admin_C_Styles/ProductAdmiData.css";
import ProductsForm from "./ProductsForm";
import logoNegroF from "../../Img/Components_Img/logo_negrov.png";

const ProductsTable = () => {
  const [productData, setProductData] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editedProduct, setEditedProduct] = useState(null);
  const [editedField, setEditedField] = useState(null);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = (productId) => {
    setIsDropdownOpen(isDropdownOpen === productId ? null : productId);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await GetData("api/products/");
        setProductData(response);
        toast.success("Productos cargados correctamente.");
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        toast.error("Error al cargar los productos.");
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (product_id) => {
    try {
      await DeleteData("api/products/", product_id);
      const updatedProducts = await GetData("api/products/");
      setProductData(updatedProducts);
      toast.success("Producto eliminado con éxito.");
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      toast.error("Error al eliminar el producto.");
    }
  };

  const handleFieldChange = (e, field) => {
    setEditedProduct({
      ...editedProduct,
      [field]: e.target.value,
    });
    setEditedField(field);
  };

  const handleSaveAll = async () => {
    try {
      const productData = {
        product_id: editedProduct.product_id,
        name: editedProduct.name,
        description: editedProduct.description,
        price: editedProduct.price,
        sub_categories_product: editedProduct.sub_categories_product,
        imagen_url: editedProduct.imagen_url,
      };
      await PutData("api/products", productData, editedProduct.product_id);
      const updatedProducts = await GetData("api/products/");
      setProductData(updatedProducts);
      setEditedProduct(null);
      toast.success("Cambios guardados exitosamente.");
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
      toast.error("Error al guardar los cambios.");
    }
  };

  const handleSaveField = async () => {
    try {
      const fieldData = {
        [editedField]: editedProduct[editedField],
      };
      await PatchData("api/products", fieldData, editedProduct.product_id);
      const updatedProducts = await GetData("api/products/");
      setProductData(updatedProducts);
      setEditedProduct(null);
      toast.success("Campo guardado correctamente.");
    } catch (error) {
      console.error("Error al guardar el cambio específico:", error);
      toast.error("Error al guardar el cambio del campo.");
    }
  };

  const loadProductData = (productId) => {
    const selectedProduct = productData.find((product) => product.product_id === productId);
    if (selectedProduct) {
      setEditedProduct({ ...selectedProduct });
      setEditedField(null);
    }
  };

  return (
    <div className="products-container">
      <ToastContainer />
      <header className="products-header">
        <img src={logoNegroF} alt="Logo" className="products-logo" />
        <h1 className="products-company-name">Productos</h1>
        <h2 className="products-title">Gestión</h2>
      </header>

      <div className="products-header-actions">
        <input
          type="text"
          className="products-search-input"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="products-btn products-add-btn"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          <i className="fa fa-plus"></i> Agregar Producto
        </button>
      </div>

      {isFormVisible && <ProductsForm />}

      <table className="products-table">
        <thead>
          <tr>
            <th className="products-th">ID</th>
            <th className="products-th">Nombre</th>
            <th className="products-th">Descripción</th>
            <th className="products-th">Precio</th>
            <th className="products-th">Subcategorías</th>
            <th className="products-th">Imagen</th>
            <th className="products-th">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.product_id} className="products-tr">
              <td className="products-td">{product.product_id}</td>
              <td className="products-td">
                {editedProduct?.product_id === product.product_id ? (
                  <input
                    type="text"
                    value={editedProduct.name}
                    onChange={(e) => handleFieldChange(e, "name")}
                  />
                ) : (
                  product.name
                )}
              </td>
              <td className="products-td">
                {editedProduct?.product_id === product.product_id ? (
                  <input
                    type="text"
                    value={editedProduct.description}
                    onChange={(e) => handleFieldChange(e, "description")}
                  />
                ) : (
                  product.description
                )}
              </td>
              <td className="products-td">
                {editedProduct?.product_id === product.product_id ? (
                  <input
                    type="text"
                    value={editedProduct.price}
                    onChange={(e) => handleFieldChange(e, "price")}
                  />
                ) : (
                  `$${product.price}`
                )}
              </td>
              <td className="products-td">
                {editedProduct?.product_id === product.product_id ? (
                  <input
                    type="text"
                    value={editedProduct.sub_categories_product}
                    onChange={(e) => handleFieldChange(e, "sub_categories_product")}
                  />
                ) : (
                  product.sub_categories_product
                )}
              </td>
              <td className="products-td">
                {editedProduct?.product_id === product.product_id ? (
                  <input
                    type="text"
                    value={editedProduct.imagen_url}
                    onChange={(e) => handleFieldChange(e, "imagen_url")}
                  />
                ) : (
                  <a href={product.imagen_url} target="_blank" rel="noopener noreferrer">
                    <img src={product.imagen_url} alt="Product Image" className="products-img" />
                  </a>
                )}
              </td>
              <td className="products-td">
                <div className="products-btn-container">
                  <button
                    className="products-btn products-more-btn"
                    onClick={() => toggleDropdown(product.product_id)}
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </button>
                  {isDropdownOpen === product.product_id && (
                    <div className="products-dropdown">
                      {editedProduct?.product_id === product.product_id ? (
                        <>
                          <button
                            className="products-dropdown-btn products-save-btn"
                            onClick={handleSaveAll}
                          >
                            Guardar Todo
                          </button>
                          <button
                            className="products-dropdown-btn products-save-btn"
                            onClick={handleSaveField}
                          >
                            Guardar Campo
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="products-dropdown-btn products-edit-btn"
                            onClick={() => loadProductData(product.product_id)}
                          >
                            <i className="fa fa-pencil"></i> Editar
                          </button>
                          <button
                            className="products-dropdown-btn products-delete-btn"
                            onClick={() => handleDelete(product.product_id)}
                          >
                            <i className="fa fa-trash"></i> Eliminar
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;