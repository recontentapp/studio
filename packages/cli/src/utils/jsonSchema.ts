import Ajv from "ajv";

export const getJSONSchema = (schema: any) => {
  try {
    const validate = new Ajv().compile(schema);

    return validate.schema;
  } catch {
    return null;
  }
};
