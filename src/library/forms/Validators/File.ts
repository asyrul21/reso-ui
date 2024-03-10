import { FormInputValidator } from "../../interfaces";
import { stringIsValidAccept } from "../../utils/validations";

/**
 * File validators
 */
export const fileIsRequired: FormInputValidator<File> = {
  validationFn: (val?: File) => {
    if (typeof val === "object" && val instanceof File) {
      return true;
    }
    return false;
  },
  errorMessage: "Please select a file",
};

const MIME_TYPE_REGEX = /^([*]|\w+)\/([*]|\w+)$/;
const EXTENSION_REGEX = /^\.\w+$/;
export const fileMatchesAccept: (
  acceptStr: string
) => FormInputValidator<File> = (acceptStr: string) => {
  if (typeof acceptStr === "string" && !stringIsValidAccept(acceptStr)) {
    throw new Error(
      "Invalid string value passed to [fileMatchesAccept] Validator."
    );
  }

  const isMimeTypeString = (a: string) => {
    return MIME_TYPE_REGEX.test(a) === true;
  };

  const isExtensionString = (a: string) => {
    return EXTENSION_REGEX.test(a);
  };

  const strIsJpg = (str: string) => {
    return str === "jpeg" || str === "jpg";
  };

  const resolveJpgVariation = (subTypeStr: string) => {
    if (strIsJpg(subTypeStr)) {
      return "jpg";
    }
    return subTypeStr;
  };

  const fileMimetypeMatchesAccepted = (
    fileMimetype: string, // image/png or image/*
    acceptedMimetype: string
  ) => {
    const [fileType, fileSubtype] = fileMimetype.trim().split("/");
    const [acceptedType, acceptedSubtype] = acceptedMimetype.trim().split("/");
    if (acceptedType === "*" && acceptedSubtype === "*") {
      // eg. */*
      return true;
    } else if (acceptedSubtype === "*") {
      // eg. image/*
      return fileType === acceptedType;
    } else if (strIsJpg(fileSubtype) || strIsJpg(acceptedSubtype)) {
      // eg. image/jpg or image/jpeg
      return (
        fileType === acceptedType &&
        resolveJpgVariation(fileSubtype) ===
          resolveJpgVariation(acceptedSubtype)
      );
    }

    return fileType === acceptedType && fileSubtype === acceptedSubtype;
  };

  const fileExtensionMatchesAccepted = (
    filename: string,
    acceptedExt: string
  ) => {
    const filenameSplit = filename.split(".");
    const fileExtension = filenameSplit[filenameSplit.length - 1];

    const acceptedFilenameSplit = acceptedExt.split(".");
    const acceptedExtension =
      acceptedFilenameSplit[acceptedFilenameSplit.length - 1];

    if (strIsJpg(fileExtension) || strIsJpg(acceptedExt)) {
      return (
        resolveJpgVariation(fileExtension) ===
        resolveJpgVariation(acceptedExtension)
      );
    }
    return `.${fileExtension}` === acceptedExt.trim();
  };

  return {
    validationFn: (val?: File) => {
      /**
       * skip validation if no value entered. This wil be handled by [stringIsRequired]
       */
      if (!val) {
        return true;
      }

      const acceptArr = acceptStr.split(",");
      if (acceptArr.length === 1) {
        // image/png or .png
        const acceptedVal = acceptArr[0].trim();
        if (isMimeTypeString(acceptedVal)) {
          // image/png;
          return fileMimetypeMatchesAccepted(val.type, acceptedVal);
        } else if (isExtensionString(acceptedVal)) {
          // .png
          return fileExtensionMatchesAccepted(val.name, acceptedVal);
        }
      }
      // array string: .png, .jpg, image/jpg
      let match = false;
      acceptArr.forEach((a: string) => {
        const allowed = a.trim();
        if (isMimeTypeString(allowed)) {
          // image/png;
          if (fileMimetypeMatchesAccepted(val.type, allowed)) {
            match = true;
            return;
          }
        } else if (isExtensionString(allowed)) {
          // .png
          if (fileExtensionMatchesAccepted(val.name, allowed)) {
            match = true;
            return;
          }
        }
        if (match === true) return;
      });
      return match;
    },
    errorMessage: "File extension or mimetype is not allowed",
  };
};
