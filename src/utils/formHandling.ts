export interface FormResponse {
  success: boolean;
  message: string;
}

export interface EmailSubscriptionData {
  Email: string;
}

export interface TeledentistrySubmissionData {
  email: string;
  locale: string;
}

export interface AccountProfileData {
  name: string;
  email: string;
  phone: string;
}

export interface AccountSettingsData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  emailNotifications: boolean;
}

export async function handleEmailSubscription(
  data: EmailSubscriptionData
): Promise<FormResponse> {
  try {
    console.log("data: ", JSON.stringify(data));
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwhrMaqH0TIfQ_NvzG4NFFfSUACFaSIFeFnxEpD2XOgUkyFBIwiHSy22b0eXQMiq71EGA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(data),
        redirect: "follow",
      }
    );

    if (!response.ok) {
      throw new Error(
        "Subscription failed. Response: " + JSON.stringify(response)
      );
    }

    return {
      success: true,
      message: "Thank you for subscribing!",
    };
  } catch (error) {
    console.error("Subscription error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

export async function handleTeledentistrySubmission(
  data: TeledentistrySubmissionData
): Promise<FormResponse> {
  try {
    console.log("Preparing to send POST request to Google Apps Script");

    // This is a placeholder for the actual API call
    // You'll replace this URL with your actual Google Apps Script URL when you create the spreadsheet
    const url =
      "https://script.google.com/macros/s/AKfycbwMKaieMnuLfuM5DAPn7CvEKqWFvCynp-XMKmIgc2dJaVHKTZs3qWRQe-uPsI-BzFFwXw/exec";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error(
        "Subscription failed. Response: " + JSON.stringify(response)
      );
    }

    return {
      success: true,
      message:
        "Thank you for your interest! We'll keep you updated on our expansion plans.",
    };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

export async function updateProfile(
  data: AccountProfileData
): Promise<FormResponse> {
  try {
    // TODO: Replace with actual API endpoint
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Profile update failed");
    }

    return {
      success: true,
      message: "Profile updated successfully!",
    };
  } catch (error) {
    console.error("Profile update error:", error);
    return {
      success: false,
      message: "Failed to update profile. Please try again.",
    };
  }
}

export async function updateSettings(
  data: AccountSettingsData
): Promise<FormResponse> {
  try {
    // TODO: Replace with actual API endpoint
    const response = await fetch("/api/settings", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Settings update failed");
    }

    return {
      success: true,
      message: "Settings updated successfully!",
    };
  } catch (error) {
    console.error("Settings update error:", error);
    return {
      success: false,
      message: "Failed to update settings. Please try again.",
    };
  }
}
