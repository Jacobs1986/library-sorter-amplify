/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { createBook } from "../graphql/mutations";
export default function BookCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    authorFirst: "",
    authorLast: "",
    publisher: "",
    isbn: "",
    pubDate: "",
    numOfPages: "",
    synopsis: "",
    cover: "",
    collectorInfo: false,
    edition: "",
    printing: "",
    dustJacket: "",
    condition: "",
    damage: "",
    acquisitionDate: "",
    acquiredFrom: "",
    acquiredCost: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [authorFirst, setAuthorFirst] = React.useState(
    initialValues.authorFirst
  );
  const [authorLast, setAuthorLast] = React.useState(initialValues.authorLast);
  const [publisher, setPublisher] = React.useState(initialValues.publisher);
  const [isbn, setIsbn] = React.useState(initialValues.isbn);
  const [pubDate, setPubDate] = React.useState(initialValues.pubDate);
  const [numOfPages, setNumOfPages] = React.useState(initialValues.numOfPages);
  const [synopsis, setSynopsis] = React.useState(initialValues.synopsis);
  const [cover, setCover] = React.useState(initialValues.cover);
  const [collectorInfo, setCollectorInfo] = React.useState(
    initialValues.collectorInfo
  );
  const [edition, setEdition] = React.useState(initialValues.edition);
  const [printing, setPrinting] = React.useState(initialValues.printing);
  const [dustJacket, setDustJacket] = React.useState(initialValues.dustJacket);
  const [condition, setCondition] = React.useState(initialValues.condition);
  const [damage, setDamage] = React.useState(initialValues.damage);
  const [acquisitionDate, setAcquisitionDate] = React.useState(
    initialValues.acquisitionDate
  );
  const [acquiredFrom, setAcquiredFrom] = React.useState(
    initialValues.acquiredFrom
  );
  const [acquiredCost, setAcquiredCost] = React.useState(
    initialValues.acquiredCost
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setAuthorFirst(initialValues.authorFirst);
    setAuthorLast(initialValues.authorLast);
    setPublisher(initialValues.publisher);
    setIsbn(initialValues.isbn);
    setPubDate(initialValues.pubDate);
    setNumOfPages(initialValues.numOfPages);
    setSynopsis(initialValues.synopsis);
    setCover(initialValues.cover);
    setCollectorInfo(initialValues.collectorInfo);
    setEdition(initialValues.edition);
    setPrinting(initialValues.printing);
    setDustJacket(initialValues.dustJacket);
    setCondition(initialValues.condition);
    setDamage(initialValues.damage);
    setAcquisitionDate(initialValues.acquisitionDate);
    setAcquiredFrom(initialValues.acquiredFrom);
    setAcquiredCost(initialValues.acquiredCost);
    setErrors({});
  };
  const validations = {
    title: [{ type: "Required" }],
    authorFirst: [],
    authorLast: [],
    publisher: [],
    isbn: [],
    pubDate: [],
    numOfPages: [],
    synopsis: [],
    cover: [],
    collectorInfo: [],
    edition: [],
    printing: [],
    dustJacket: [],
    condition: [],
    damage: [],
    acquisitionDate: [],
    acquiredFrom: [],
    acquiredCost: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          authorFirst,
          authorLast,
          publisher,
          isbn,
          pubDate,
          numOfPages,
          synopsis,
          cover,
          collectorInfo,
          edition,
          printing,
          dustJacket,
          condition,
          damage,
          acquisitionDate,
          acquiredFrom,
          acquiredCost,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createBook,
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BookCreateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Author first"
        isRequired={false}
        isReadOnly={false}
        value={authorFirst}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst: value,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.authorFirst ?? value;
          }
          if (errors.authorFirst?.hasError) {
            runValidationTasks("authorFirst", value);
          }
          setAuthorFirst(value);
        }}
        onBlur={() => runValidationTasks("authorFirst", authorFirst)}
        errorMessage={errors.authorFirst?.errorMessage}
        hasError={errors.authorFirst?.hasError}
        {...getOverrideProps(overrides, "authorFirst")}
      ></TextField>
      <TextField
        label="Author last"
        isRequired={false}
        isReadOnly={false}
        value={authorLast}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast: value,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.authorLast ?? value;
          }
          if (errors.authorLast?.hasError) {
            runValidationTasks("authorLast", value);
          }
          setAuthorLast(value);
        }}
        onBlur={() => runValidationTasks("authorLast", authorLast)}
        errorMessage={errors.authorLast?.errorMessage}
        hasError={errors.authorLast?.hasError}
        {...getOverrideProps(overrides, "authorLast")}
      ></TextField>
      <TextField
        label="Publisher"
        isRequired={false}
        isReadOnly={false}
        value={publisher}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher: value,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.publisher ?? value;
          }
          if (errors.publisher?.hasError) {
            runValidationTasks("publisher", value);
          }
          setPublisher(value);
        }}
        onBlur={() => runValidationTasks("publisher", publisher)}
        errorMessage={errors.publisher?.errorMessage}
        hasError={errors.publisher?.hasError}
        {...getOverrideProps(overrides, "publisher")}
      ></TextField>
      <TextField
        label="Isbn"
        isRequired={false}
        isReadOnly={false}
        value={isbn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn: value,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.isbn ?? value;
          }
          if (errors.isbn?.hasError) {
            runValidationTasks("isbn", value);
          }
          setIsbn(value);
        }}
        onBlur={() => runValidationTasks("isbn", isbn)}
        errorMessage={errors.isbn?.errorMessage}
        hasError={errors.isbn?.hasError}
        {...getOverrideProps(overrides, "isbn")}
      ></TextField>
      <TextField
        label="Pub date"
        isRequired={false}
        isReadOnly={false}
        value={pubDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate: value,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.pubDate ?? value;
          }
          if (errors.pubDate?.hasError) {
            runValidationTasks("pubDate", value);
          }
          setPubDate(value);
        }}
        onBlur={() => runValidationTasks("pubDate", pubDate)}
        errorMessage={errors.pubDate?.errorMessage}
        hasError={errors.pubDate?.hasError}
        {...getOverrideProps(overrides, "pubDate")}
      ></TextField>
      <TextField
        label="Num of pages"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numOfPages}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages: value,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.numOfPages ?? value;
          }
          if (errors.numOfPages?.hasError) {
            runValidationTasks("numOfPages", value);
          }
          setNumOfPages(value);
        }}
        onBlur={() => runValidationTasks("numOfPages", numOfPages)}
        errorMessage={errors.numOfPages?.errorMessage}
        hasError={errors.numOfPages?.hasError}
        {...getOverrideProps(overrides, "numOfPages")}
      ></TextField>
      <TextField
        label="Synopsis"
        isRequired={false}
        isReadOnly={false}
        value={synopsis}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis: value,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.synopsis ?? value;
          }
          if (errors.synopsis?.hasError) {
            runValidationTasks("synopsis", value);
          }
          setSynopsis(value);
        }}
        onBlur={() => runValidationTasks("synopsis", synopsis)}
        errorMessage={errors.synopsis?.errorMessage}
        hasError={errors.synopsis?.hasError}
        {...getOverrideProps(overrides, "synopsis")}
      ></TextField>
      <TextField
        label="Cover"
        isRequired={false}
        isReadOnly={false}
        value={cover}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover: value,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.cover ?? value;
          }
          if (errors.cover?.hasError) {
            runValidationTasks("cover", value);
          }
          setCover(value);
        }}
        onBlur={() => runValidationTasks("cover", cover)}
        errorMessage={errors.cover?.errorMessage}
        hasError={errors.cover?.hasError}
        {...getOverrideProps(overrides, "cover")}
      ></TextField>
      <SwitchField
        label="Collector info"
        defaultChecked={false}
        isDisabled={false}
        isChecked={collectorInfo}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo: value,
              edition,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.collectorInfo ?? value;
          }
          if (errors.collectorInfo?.hasError) {
            runValidationTasks("collectorInfo", value);
          }
          setCollectorInfo(value);
        }}
        onBlur={() => runValidationTasks("collectorInfo", collectorInfo)}
        errorMessage={errors.collectorInfo?.errorMessage}
        hasError={errors.collectorInfo?.hasError}
        {...getOverrideProps(overrides, "collectorInfo")}
      ></SwitchField>
      <TextField
        label="Edition"
        isRequired={false}
        isReadOnly={false}
        value={edition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition: value,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.edition ?? value;
          }
          if (errors.edition?.hasError) {
            runValidationTasks("edition", value);
          }
          setEdition(value);
        }}
        onBlur={() => runValidationTasks("edition", edition)}
        errorMessage={errors.edition?.errorMessage}
        hasError={errors.edition?.hasError}
        {...getOverrideProps(overrides, "edition")}
      ></TextField>
      <TextField
        label="Printing"
        isRequired={false}
        isReadOnly={false}
        value={printing}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing: value,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.printing ?? value;
          }
          if (errors.printing?.hasError) {
            runValidationTasks("printing", value);
          }
          setPrinting(value);
        }}
        onBlur={() => runValidationTasks("printing", printing)}
        errorMessage={errors.printing?.errorMessage}
        hasError={errors.printing?.hasError}
        {...getOverrideProps(overrides, "printing")}
      ></TextField>
      <TextField
        label="Dust jacket"
        isRequired={false}
        isReadOnly={false}
        value={dustJacket}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket: value,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.dustJacket ?? value;
          }
          if (errors.dustJacket?.hasError) {
            runValidationTasks("dustJacket", value);
          }
          setDustJacket(value);
        }}
        onBlur={() => runValidationTasks("dustJacket", dustJacket)}
        errorMessage={errors.dustJacket?.errorMessage}
        hasError={errors.dustJacket?.hasError}
        {...getOverrideProps(overrides, "dustJacket")}
      ></TextField>
      <TextField
        label="Condition"
        isRequired={false}
        isReadOnly={false}
        value={condition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition: value,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.condition ?? value;
          }
          if (errors.condition?.hasError) {
            runValidationTasks("condition", value);
          }
          setCondition(value);
        }}
        onBlur={() => runValidationTasks("condition", condition)}
        errorMessage={errors.condition?.errorMessage}
        hasError={errors.condition?.hasError}
        {...getOverrideProps(overrides, "condition")}
      ></TextField>
      <TextField
        label="Damage"
        isRequired={false}
        isReadOnly={false}
        value={damage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition,
              damage: value,
              acquisitionDate,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.damage ?? value;
          }
          if (errors.damage?.hasError) {
            runValidationTasks("damage", value);
          }
          setDamage(value);
        }}
        onBlur={() => runValidationTasks("damage", damage)}
        errorMessage={errors.damage?.errorMessage}
        hasError={errors.damage?.hasError}
        {...getOverrideProps(overrides, "damage")}
      ></TextField>
      <TextField
        label="Acquisition date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={acquisitionDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate: value,
              acquiredFrom,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.acquisitionDate ?? value;
          }
          if (errors.acquisitionDate?.hasError) {
            runValidationTasks("acquisitionDate", value);
          }
          setAcquisitionDate(value);
        }}
        onBlur={() => runValidationTasks("acquisitionDate", acquisitionDate)}
        errorMessage={errors.acquisitionDate?.errorMessage}
        hasError={errors.acquisitionDate?.hasError}
        {...getOverrideProps(overrides, "acquisitionDate")}
      ></TextField>
      <TextField
        label="Acquired from"
        isRequired={false}
        isReadOnly={false}
        value={acquiredFrom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom: value,
              acquiredCost,
            };
            const result = onChange(modelFields);
            value = result?.acquiredFrom ?? value;
          }
          if (errors.acquiredFrom?.hasError) {
            runValidationTasks("acquiredFrom", value);
          }
          setAcquiredFrom(value);
        }}
        onBlur={() => runValidationTasks("acquiredFrom", acquiredFrom)}
        errorMessage={errors.acquiredFrom?.errorMessage}
        hasError={errors.acquiredFrom?.hasError}
        {...getOverrideProps(overrides, "acquiredFrom")}
      ></TextField>
      <TextField
        label="Acquired cost"
        isRequired={false}
        isReadOnly={false}
        value={acquiredCost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              authorFirst,
              authorLast,
              publisher,
              isbn,
              pubDate,
              numOfPages,
              synopsis,
              cover,
              collectorInfo,
              edition,
              printing,
              dustJacket,
              condition,
              damage,
              acquisitionDate,
              acquiredFrom,
              acquiredCost: value,
            };
            const result = onChange(modelFields);
            value = result?.acquiredCost ?? value;
          }
          if (errors.acquiredCost?.hasError) {
            runValidationTasks("acquiredCost", value);
          }
          setAcquiredCost(value);
        }}
        onBlur={() => runValidationTasks("acquiredCost", acquiredCost)}
        errorMessage={errors.acquiredCost?.errorMessage}
        hasError={errors.acquiredCost?.hasError}
        {...getOverrideProps(overrides, "acquiredCost")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
