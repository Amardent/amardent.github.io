export interface FormResponse {
  success: boolean;
  message: string;
}

export interface EmailSubscriptionData {
  Email: string;
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
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzoqMss1SIANc7zxY7ISTVEqpKmXZAEXFBXv4T-ndYvfkWOiT1qPS6aghHVqxe8MNHCAA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Subscription failed");
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
