
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

            <div v-if="errors.length > 0" class="error">
                <p>The password is not valid -</p>
                <p v-for="error in errors" :key="error">{{ error }}</p>
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
            password: "",
            errors: []
        }
    },
    methods: {
        submitForm() {
            const p = this.password;
            this.errors = [];

            // Checks every rule and saves the ones that failed
            if (p.length < 8 || p.length >= 15) {
                this.errors.push("Should be at least 8 and less than 15 characters long");
            }
            if (!/[A-Z]/.test(p)) {
                this.errors.push("Includes at least one uppercase alphabet character");
            }
            // Counts lowercase letters by removing everything else
            if (p.replace(/[^a-z]/g, "").length < 2) {
                this.errors.push("Includes at least two lowercase alphabet characters");
            }
            if (!/[0-9]/.test(p)) {
                this.errors.push("Includes at least one numeric value");
            }
            if (!/^[A-Z]/.test(p)) {
                this.errors.push("Should start with an uppercase letter");
            }
            if (!p.includes("_")) {
                this.errors.push('Should include the character "_"');
            }

            // Goes to the home page when the password is valid
            if (this.errors.length === 0) {
                this.$router.push("/");
            }
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

.error {
    width: 100%;
    color: #c0392b;
    font-size: 13px;
}

.error p {
    margin: 2px 0;
}
</style>
