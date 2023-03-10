import btn from './buttons.js';

export default
{
  localeName: () => 'English',
  new: () => 'New',
  waiting_list: () => 'Waiting list',
  in_rating: () => 'in rating',
  assessed: () => 'assessed',
  telephone_interview: () => 'Telephon interview',
  first_interview: () => 'first Interview',
  second_interview: () => 'second Interview',
  short_list: () => 'short list',
  assessment: () => 'Assessment',
  offer_received: () => 'Offer received',
  hired: () => 'Hired',
  pool: () => 'Pool',
  declined: () => 'Declined',
  jobs: () => 'Jobs',
  job: () => 'Ad',
  logo: () => 'Logo',
  Mr: () => 'Mr.',
  Mrs: () => 'Mrs.',
  header: () => 'Headerimage',
  create_job: () => 'create new job',
  jobboard: () => 'Jobboard',
  job_title: () => 'Job title',
  ad_management: () => 'Ad management',
  public_jobs: () => 'Current job offers',
  search: () => 'Search',
  settings: () => 'Settings',
  templates: () => 'Templates',
  date: () => 'Date',
  location: () => 'Location',
  company: () => 'Company',
  recruiter: () => 'Recruiter',
  title: () => 'Please register',
  action: () => 'Action',
  unpublished: () => 'unpublished',
  'ad-management-description': 'With the advertisement management you can save, edit and delete job advertisements. The advertisement management is also required to integrate job advertisements into your homepage.',
  preis1: () => 'Registration is free of charge',
  please_register: () => 'You are currently not logged in. To use the ad management, you must register. Registration is free of charge.',
  confirm_del: () => 'Do you really want to delete the job advertisement?',
  alert: () => 'Alert',
  wizard_help_title: () => 'Create job ad',
  wizard_help_text: () => 'The Jobwizard supports you in creating an advertisement. The use of the Job Wizard and the creation of the advertisement is free of charge. You can activate and deactivate further fields via the settings.',
  wizard_help_anonymous: () => 'You are currently not logged in. You can use all functions as an anonymous user. However, at the end you can only download the advertisement as HTML.',
  select_or_create: () => 'Choose a company or create a new one.',
  btn: btn,
  nav:
  {
    applications: () => 'Applications',
    applicant: () => 'Applicant',
    attachments: () => 'Attachments',
    dashboard: () => 'Dashboard',
    demo: () => 'Demo',
    settings: () => 'Settings',
    jobs: () => 'Jobs',
    job_title: () => 'Job title',
    misc: () => 'Misc',
    organization: () => 'Organisation',
    organizations: () => 'Organisations',
    project: () => 'Project',
    projects: () => 'Projects',
    contact: () => 'Contact',
    create_org: () => 'Create new company',
    update_org: () => 'Update company',
    edit_org: () => 'Edit company',
    del_org: () => 'Delete company',
    state: () => 'State',
    statistics: () => 'Statistcs',
    clicks: () => 'Clicks',
    create_job: () => 'Create new Jobad',
    edit_job: () => 'Edit job ad',
    del_job: () => 'Delete job ad',
    edit_application: () => 'Edit application',
    del_application: () => 'Delete application',
  },
  help: {
    dark_mode: () => 'Switch dark display on and off',
    visibility: () => 'Hide salary in job advertisement',
    reference: () => 'You can assign a reference number to your advertisement. An applicant can refer to this.',
    apply_post: () => 'Here you can specify whether you would prefer to receive applications in the traditional form by post. The application button in the job advertisement then adjusts accordingly.'
  },
  label:
  {
    organization: () => 'Organization',
    country: () => 'Country',
    countries: () => 'Countries',
    location: () => 'Location',
    email_or_username: () => 'Email or username',
    forgot_password: () => 'Forgot password',
    reset_password: () => 'Reset password',
    username: () => 'Username',
    password: () => 'Password',
    password_repeat: () => 'Repeat password',
    apply_url: () => 'Apply URL',
    apply_email: () => 'Apply e-mail',
    apply_post: () => 'No online application/postal application',
    reference: () => 'Reference',
    freelance: () => 'Freelance',
    contract: () => 'Contract',
    internship: () => 'Internship',
    apprenticeship: () => 'Apprenticeship',
    fulltime: () => 'Full-time',
    parttime: () => 'Part-time',
    minijob: () => 'Minijob',
    shiftwork: () => 'Shift work',
    work_duration: () => 'Workload',
    work_kind: () => 'Kind of work',
    visibility: () => 'Visibility',
    salary: () => 'Annual salary',
    homeoffice: () => 'Home office',
    firstname: () => 'First name',
    lastname: () => 'Last name'
  },
  msg: {
    job_saved_success: () => 'Job posting successfully saved',
    login_successfull: () => 'Logged in successfully!',
    login_failed: () => 'Login failed. {err}',
    registration_successfull: () => 'The registration was successful. Please check your mails!'
  },
  rules:
  {
    required: () => 'Required field',
    invalid_date: () => 'Invalid date',
    invalid_email:
    {
      delimiters: () => 'Email address seems incorrect (check @ and dots)',
      unicode_user: () => 'This username in email contains invalid characters',
      unicode_domain: () => 'This domain name contains invalid characters',
      username: () => 'The username in email does not seem to be valid',
      ip: () => 'Destination IP address is invalid!',
      domain: () => 'The domain name does not seem to be valid',
      hostname: () => 'This email address is missing a hostname!',
    },
    invalid_url: () => 'Invalid URL'
  },
  steps: {
    stepOne: () => 'General data',
    stepTwo: () => 'Create job ad',
    stepThree: () => 'Categories',
    stepFour: () => 'Channels'
  }

};
