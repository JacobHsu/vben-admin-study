<template>
  <LoginFormTitle v-show="getShow" class="enter-x" />
  <Form
    class="p-4 enter-x"
    :model="formData"
    :rules="getFormRules"
    ref="formRef"
    v-show="getShow"
  >
    <FormItem name="account" class="enter-x">
      <Input
        size="large"
        v-model:value="formData.account"
        :placeholder="t('sys.login.userName')"
        class="fix-auto-fill"
      />
    </FormItem>
  </Form>
</template>
<script lang="ts" setup>
import { reactive, ref, unref, computed } from 'vue';
import { Checkbox, Form, Input, Row, Col, Button, Divider } from 'ant-design-vue';
import LoginFormTitle from './LoginFormTitle.vue';
import { useI18n } from '/@/hooks/web/useI18n';
import { LoginStateEnum, useLoginState, useFormRules, useFormValid } from './useLogin';

const ACol = Col;
const ARow = Row;
const FormItem = Form.Item;
const InputPassword = Input.Password;
const { t } = useI18n();
const { setLoginState, getLoginState } = useLoginState();
const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);

const formData = reactive({
  account: 'vben',
  password: '123456',
});

</script>