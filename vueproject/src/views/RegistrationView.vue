
<template>
    <div class="RegistrationView">
        <form class="signup-form" @submit.prevent="submitForm">
            <div class="form-row">
                <label for="email">Email</label>
                <input
                    id="email"
                    v-model="email"
                    type="email"
                    placeholder="Email"
                    required
                >
            </div>

            <div class="form-row">
                <label for="password">Password</label>
                <input
                    id="password"
                    v-model="password"
                    type="password"
                    placeholder="Password"
                    required
                >
            </div>

            <button type="submit">Signup</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "RegistrationView",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        submitForm() {
            // Signup functionality can be added here.
        }
    }
}
</script>

<style scoped>
.RegistrationView {
    display: flex;
    justify-content: center;
    padding: 12px;
}

.signup-form {
    background-color: #eaf0df;
    border-radius: 12px;
    padding: 24px;
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
}

.form-row {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
}

.form-row label {
    width: 80px;
    text-align: right;
}

.form-row input {
    flex: 1;
    min-width: 0;
    padding: 10px;
    border: none;
    border-radius: 12px;
    font-size: 14px;
    text-align: center;
    background-color: white;
}

.signup-form button {
    background-color: #8db5e8;
    color: black;
    border: none;
    border-radius: 12px;
    padding: 8px 24px;
    cursor: pointer;
}

.signup-form button:hover {
    background-color: #70a2e0;
}
</style>
