import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createUser } from "../../api/userService";
import { useEffect } from "react";
import { updateUser } from "../../api/userService";

function UserForm({
  isOpen,
  onClose,
  onSave,
  editingUser,
  isEditing,
  onUpdate,
}) {

    
  const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm();
useEffect(() => {
  if (editingUser) {
    reset(editingUser);
  } else {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });
  }
}, [editingUser, reset]);


  if (!isOpen) return null;

  const onSubmit = async (data) => {
  try {
    if (isEditing) {
      const updatedUser = {
        ...editingUser,
        ...data,
      };

      // Call API only for the original 10 users
      if (updatedUser.id <= 10) {
        await updateUser(updatedUser.id, updatedUser);
      }

      // Always update local state
      onUpdate(updatedUser);

toast.success("✏️ User updated successfully!");
    } else {
      await createUser(data);

      onSave(data);

      toast.success("🎉 User added successfully!");    }

    onClose();
    reset();
  } catch (error) {
    console.error(error);

    // If API fails while editing, still update the UI
    if (isEditing) {
      const updatedUser = {
        ...editingUser,
        ...data,
      };

      onUpdate(updatedUser);
toast.success("✏️ User updated successfully!");
      onClose();
      reset();
    } else {
      toast.error("Failed to Add User");
    }
  }
};
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8">

        <h2 className="text-3xl font-bold mb-6">
  {isEditing ? "Edit User" : "Add User"}
</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <div>

            <label className="font-medium">
              First Name
            </label>

            <input
              {...register("firstName", {
                required: "First Name is required",
              })}
              className="w-full mt-2 border rounded-lg p-3"
            />

            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}

          </div>

          <div>

            <label className="font-medium">
              Last Name
            </label>

            <input
              {...register("lastName", {
                required: "Last Name is required",
              })}
              className="w-full mt-2 border rounded-lg p-3"
            />

            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}

          </div>

          <div>

            <label className="font-medium">
              Email
            </label>

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid Email",
                },
              })}
              className="w-full mt-2 border rounded-lg p-3"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}

          </div>

          <div>

            <label className="font-medium">
              Department
            </label>

            <select
              {...register("department", {
                required: "Department is required",
              })}
              className="w-full mt-2 border rounded-lg p-3"
            >
              <option value="">Select Department</option>
              <option>Engineering</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>

            {errors.department && (
              <p className="text-red-500 text-sm mt-1">
                {errors.department.message}
              </p>
            )}

          </div>

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="border px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
                {isEditing ? "Update User" : "Save User"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default UserForm;