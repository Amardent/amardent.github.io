"use client";

import { useState } from "react";
import Image from "next/image";
import {
  updateProfile,
  updateSettings,
  type AccountProfileData,
  type AccountSettingsData,
} from "@/utils/formHandling";

export default function Account() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [profileData, setProfileData] = useState<AccountProfileData>({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
  });
  const [settingsData, setSettingsData] = useState<AccountSettingsData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    emailNotifications: false,
  });

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse(null);

    const result = await updateProfile(profileData);
    setResponse(result);
    setIsSubmitting(false);
  };

  const handleSettingsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse(null);

    if (settingsData.newPassword !== settingsData.confirmPassword) {
      setResponse({
        success: false,
        message: "New passwords do not match.",
      });
      setIsSubmitting(false);
      return;
    }

    const result = await updateSettings(settingsData);
    setResponse(result);
    setIsSubmitting(false);

    if (result.success) {
      setSettingsData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        emailNotifications: settingsData.emailNotifications,
      });
    }
  };

  return (
    <section className="segment">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-4 mb-4">My Account</h1>

            {/* Tabs */}
            <ul className="nav nav-tabs mb-4">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "profile" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  Profile
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "orders" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("orders")}
                >
                  Orders
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "settings" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("settings")}
                >
                  Settings
                </button>
              </li>
            </ul>

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="card">
                <div className="card-body">
                  <div className="text-center mb-4">
                    <div className="position-relative d-inline-block">
                      <Image
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        width={150}
                        height={150}
                        className="rounded-circle"
                      />
                      <button className="btn btn-sm btn-outline-primary position-absolute bottom-0 end-0">
                        Change
                      </button>
                    </div>
                  </div>
                  <form onSubmit={handleProfileSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={profileData.name}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            name: e.target.value,
                          })
                        }
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            email: e.target.value,
                          })
                        }
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            phone: e.target.value,
                          })
                        }
                        disabled={isSubmitting}
                      />
                    </div>
                    {response && (
                      <div
                        className={`alert ${
                          response.success ? "alert-success" : "alert-danger"
                        }`}
                      >
                        {response.message}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Saving..." : "Save Changes"}
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="card">
                <div className="card-body">
                  <h3 className="h4 mb-4">Order History</h3>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Total</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#12345</td>
                          <td>Mar 15, 2024</td>
                          <td>
                            <span className="badge bg-success">Shipped</span>
                          </td>
                          <td>$299.00</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="card">
                <div className="card-body">
                  <h3 className="h4 mb-4">Account Settings</h3>
                  <form onSubmit={handleSettingsSubmit}>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={settingsData.currentPassword}
                        onChange={(e) =>
                          setSettingsData({
                            ...settingsData,
                            currentPassword: e.target.value,
                          })
                        }
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="newPassword" className="form-label">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        value={settingsData.newPassword}
                        onChange={(e) =>
                          setSettingsData({
                            ...settingsData,
                            newPassword: e.target.value,
                          })
                        }
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={settingsData.confirmPassword}
                        onChange={(e) =>
                          setSettingsData({
                            ...settingsData,
                            confirmPassword: e.target.value,
                          })
                        }
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="emailNotifications"
                          checked={settingsData.emailNotifications}
                          onChange={(e) =>
                            setSettingsData({
                              ...settingsData,
                              emailNotifications: e.target.checked,
                            })
                          }
                          disabled={isSubmitting}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="emailNotifications"
                        >
                          Receive email notifications
                        </label>
                      </div>
                    </div>
                    {response && (
                      <div
                        className={`alert ${
                          response.success ? "alert-success" : "alert-danger"
                        }`}
                      >
                        {response.message}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Updating..." : "Update Settings"}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
