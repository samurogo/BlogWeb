// src/components/molecules/BlogEntry.js
import Button from "../Atoms/Button";

const blogEntry = ({ title, description, onEdit, onDelete }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <Button text="Editar" onClick={onEdit} />
    <Button text="Eliminar" onClick={onDelete} />
  </div>
);

export default blogEntry;
